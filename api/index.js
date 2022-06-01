const express=require("express");
const cors = require("cors");
const app=express();
const dotenv = require("dotenv");
dotenv.config();


//import user routes
const userRoutes=require("./src/routes/user.route");
//import student routes
const studentRoutes=require("./src/routes/student.route");
//import teacher routes
const teacherRoutes=require("./src/routes/teacher.route");
//import batch routes
const batchRoutes=require("./src/routes/batch.route");
//import grade routes
const gradeRoutes=require("./src/routes/grade.route");
//import level route
const levelRoutes=require("./src/routes/level.route");
//import result route
const resultRoutes=require("./src/routes/result.route");
//import announcement route
const announcementRoutes=require("./src/routes/announcement.route");
//import course route
const courseRoutes=require("./src/routes/course.route");
//import enrollment route
const enrollmentRoutes=require("./src/routes/enrollment.route");
//import teach route
const teachRoutes=require("./src/routes/teach.route");

app.use(cors());
// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

app.use('/api/user',userRoutes);
app.use('/api/student',studentRoutes);
app.use('/api/teacher',teacherRoutes);
app.use('/api/batch',batchRoutes);
app.use('/api/grade',gradeRoutes);
app.use('/api/level',levelRoutes);
app.use('/api/result',resultRoutes);
app.use('/api/announcement',announcementRoutes);
app.use('/api/course',courseRoutes);
app.use('/api/enrollment',enrollmentRoutes);
app.use('/api/teach',teachRoutes);

app.listen('5000',()=>{
    console.log("Server started");
})
