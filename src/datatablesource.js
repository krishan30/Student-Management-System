export const userColumns = [
  { field: "courseid", headerName: "ID", width: 70 },
  {
    field: "levelid",
    headerName: "Level Code	",
    width: 100,
  },
  {
    field: "description",
    headerName: "Course Description",
    width: 680,
  },

  {
    field: "credit",
    headerName: "Credits",
    width: 100,
  },
  {
    field: "duration",
    headerName: "Duration",
    width: 100,
  },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 100,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];
const datacopt = [
  {
    courseid: 1,
    announcementid: 2,
    title: "Announcement 02",
    body: "Content of announcement 02",
    batchid: 1,
    teacherid: 1,
    studentid: 1,
    enrolleddate: "2022-05-28T14:28:43.000Z",
    finisheddate: null,
  },
  {
    courseid: 1,
    announcementid: 1,
    title: "Title 01",
    body: "Body 01",
    batchid: 1,
    teacherid: 1,
    studentid: 1,
    enrolleddate: "2022-05-28T14:28:43.000Z",
    finisheddate: null,
  },
];
const coursCop = [
  { courseid: 1, levelid: 1, coursename: "Course 01", duration: 14, credit: 3 },
  { courseid: 3, levelid: 1, coursename: "Course 03", duration: 12, credit: 1 },
  { courseid: 4, levelid: 2, coursename: "Course 04", duration: 14, credit: 2 },
];
const allcourses = [
  {
    courseid: 1,
    levelid: 1,
    coursename: "Course 01",
    description: "Description 01",
    duration: 14,
    credit: 3,
  },
  {
    courseid: 2,
    levelid: 1,
    coursename: "Course 02",
    description: "Description 02",
    duration: 16,
    credit: 2,
  },
  {
    courseid: 3,
    levelid: 1,
    coursename: "Course 03",
    description: "Description 03",
    duration: 12,
    credit: 1,
  },
  {
    courseid: 4,
    levelid: 2,
    coursename: "Course 04",
    description: "Description 04",
    duration: 14,
    credit: 2,
  },
];
