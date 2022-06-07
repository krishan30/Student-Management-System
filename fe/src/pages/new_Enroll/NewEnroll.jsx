import "./new_enroll.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"

const NewEnroll = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer" >
        <Navbar/>
        <div className="topl">
          <h1>New Enroll</h1>
        </div>
        <Datatable/>
      </div>
    </div>
  )
}

export default NewEnroll