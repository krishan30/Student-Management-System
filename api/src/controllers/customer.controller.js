const customerModel = require("../models/customer.model");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const Customer = require("../models/customer.model");

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a customer
  const customer = new customerModel({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Address: req.body.Address,
    NicNumber: req.body.NicNumber,
    CustomerType: req.body.CustomerType,
    Password: CryptoJS.AES.encrypt(
      req.body.Password,
      process.env.PASS_SEC
    ).toString(),
    Birthday: req.body.Birthday,
    Gender:req.body.Gender,
  });

  // Save customer in the database
  customerModel.create(customer, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the customer.",
      });
    else res.send(data);
  });
};
//login
exports.login = (req, res) => {
  console.log(req.body);
  customerModel.findByNicNumber(req.body.NicNumber, (err, customer) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found customer with Nic ${req.body.NicNumber}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + req.body.NicNumber,
        });
      }
    } else {
      const hashedPassword = CryptoJS.AES.decrypt(
        customer.Password,
        process.env.PASS_SEC
      );
      const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

      OriginalPassword !== req.body.Password &&
        res.status(401).json("Wrong credentials!");
    }
    const accessToken = jwt.sign(
      {
        id: customer.NicNumber,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { Password, ...others } = customer;
    res.status(200).json({ ...others, accessToken });
  });
};


// Update a Tutorial identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Customer.updateById(
    req.params.id,
    new Customer(req.body),
    (err, customer) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Customer with id " + req.params.id
          });
        }
      } else res.send(customer);
    }
  );
};


// Retrieve all customers from the database (with condition).
exports.getAllCustomers = (req, res) => {
  customerModel.getAllCustomers((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else res.send(data);
  });
};

// Find a single customer by Id
exports.customerFindById = (req, res) => {
  customerModel.customerFindById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found customer with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};
