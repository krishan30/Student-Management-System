import React from "react";
import { Helmet } from "react-helmet";
import useGetBatch from "../../hooks/useGetBatch";
import useGetCourses from "../../hooks/useGetCourses";
import useGetLevel from "../../hooks/useGetLevel";
import useGetstudents from "../../hooks/useGetStudent";
import useGetTeachers from "../../hooks/useGetTeachers";

const AdminDashboard = () => {
  const teachers = useGetTeachers();
  const courses = useGetCourses();
  const students = useGetstudents();
  const batch = useGetBatch();
  const level = useGetLevel();

  return (
    <div>
      <div className="mx-auto">
        <Helmet>
          <title>Dashboard</title>
          <meta name="description" />
        </Helmet>
        <div className="row m-4 d-flex text-center align-items-center shadow-lg p-3 ">
          <div className=" mx-auto col  shadow mx-5">
            <div className="text-center h4 ">Teacher</div>
            <div className="row d-flex align-items-center">
              <div className="col-6">
                <img
                  src="../../assests/images/teacher_avatar.jpg"
                  alt="itemicon"
                  width="100px"
                  height="100px"
                />
              </div>
              <div className="h2 col-6">{teachers.length}</div>
            </div>
          </div>

          <div className=" mx-auto col  shadow mx-5">
            <div className="text-center h4 ">Student</div>
            <div className="row d-flex align-items-center">
              <div className="col-6">
                <img
                  src="../../assests/images/student_avatar.jpg"
                  alt="itemicon"
                  width="100px"
                  height="100px"
                />
              </div>
              <div className="h2 col-6">{students.length}</div>
            </div>
          </div>

          <div className=" mx-auto col  shadow mx-5">
            <div className="text-center h4 ">Course</div>
            <div className="row d-flex align-items-center">
              <div className="col-6">
                <img
                  src="../../assests/images/book_avatar.jpg"
                  alt="itemicon"
                  width="100px"
                  height="100px"
                />
              </div>
              <div className="h2 col-6">{courses.length}</div>
            </div>
          </div>

          <div className=" mx-auto col  shadow mx-5">
            <div className="text-center h4 ">Batch</div>
            <div className="row d-flex align-items-center">
              <div className="col-6">
                <img
                  src="../../assests/images/batch_avatar.jpg"
                  alt="itemicon"
                  width="100px"
                  height="100px"
                />
              </div>
              <div className="h2 col-6">{batch.length}</div>
            </div>
          </div>

          <div className=" mx-auto col  shadow mx-5">
            <div className="text-center h4 ">Level</div>
            <div className="row d-flex align-items-center">
              <div className="col-6">
                <img
                  src="../../assests/images/level_avatar.jpg"
                  alt="itemicon"
                  width="100px"
                  height="100px"
                />
              </div>
              <div className="h2 col-6">{level.length}</div>
            </div>
          </div>
        </div>

        <div className="row m-4">
          <div className="col-md-4  shadow p-4">
            <div className="h4 shadow p-2 text-center my-4">
              Recent Teachers
            </div>
            <div className="row ">
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">Teacher ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Contact No</th>
                  </tr>
                </thead>
                <tbody>
                  {teachers
                    .reverse()
                    .slice(0, 5)
                    .map((teacher) => {
                      return (
                        <tr key={teacher.teacherid}>
                          <td>{teacher.teacherid}</td>
                          <td>{teacher.firstname}</td>
                          <td>{teacher.contactnumber}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-md-4  shadow p-4">
            <div className="h4 shadow p-2 text-center my-4">
              Recent Students
            </div>
            <div className="row ">
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">Student ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Contact No</th>
                  </tr>
                </thead>
                <tbody>
                  {students
                    .reverse()
                    .slice(0, 5)
                    .map((student) => {
                      return (
                        <tr key={student.studentid}>
                          <td>{student.studentid}</td>
                          <td>{student.firstname}</td>
                          <td>{student.contactnumber}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-md-4  shadow p-4">
            <div className="h4 shadow p-2 text-center my-4">Recent Courses</div>
            <div className="row ">
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">Course ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Credit</th>
                  </tr>
                </thead>
                <tbody>
                  {courses
                    .reverse()
                    .slice(0, 5)
                    .map((course) => {
                      return (
                        <tr key={course.courseid}>
                          <td>{course.courseid}</td>
                          <td>{course.coursename}</td>
                          <td>{course.credit}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
