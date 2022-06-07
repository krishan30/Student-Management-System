import Home from "./pages/home/Home";
import NewEnroll from "./pages/new_Enroll/NewEnroll";
import Grades from "./pages/grades/Grades";
import Profile from "./pages/profile/Profile";
import MyCourses from "./pages/my_Courses/MyCourses.jsx";
import Notification from "./pages/notifications/Notifications"
import Course from "./pages/course/Course"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs } from "./formSource";

function App() {

  return (
    <div className= "app">
      <BrowserRouter>
        <Routes>

          <Route path="/">

            <Route index element={<Home />} />

            <Route path="grades">
              <Route index element={<Grades />} />
            </Route>

            <Route path="newEnroll">
              <Route index element={<NewEnroll />} />
            </Route>

            <Route path="profile">
              <Route index element={<Profile inputs={productInputs} title="Add New Product" />} />
            </Route>

            <Route path="myCourses">
              <Route index element={<MyCourses />} />
            </Route>

            <Route path="notifications">
              <Route index element={<Notification />} />
            </Route>

            <Route path="course">
              <Route index element={<Course />} />
              <Route path=":courseId" element={<Course />} />
            </Route>

          </Route>
            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
