import "./my_courses.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatableMyCourses from "../../components/my_courses/MyCourses"

const MyCourses = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer" >
        <Navbar/>
        <div className="topl">
          <h1>My Courses</h1>
        </div>
        <DatatableMyCourses/>
      </div>
    </div>
  )
}

export default MyCourses