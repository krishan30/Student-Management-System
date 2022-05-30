import "./table.scss";

const List = () => {
  const courses = [
    {
      dep: "Eng-MATH",
      name:" Course is starredCourse nameIn19-S4-MA2063 - Differential Equations and Applications"
    },
    {
      dep: "Eng-MATH",
      name:"Course is starredCourse nameIn19-S4-CS3953 - Technical Writing"
    },
    {
      dep: "Eng-MATH",
     name:" Course is starredCourse nameIn19-S4-MA2033 - Linear Algebra"
    },
    {
      dep: "Eng-MATH",
      name:" Course is starredCourse nameIn19-S4-CS3022 - Software Engineering"
    },
    {
      dep: "Eng-MATH",
      name:" Course is starredCourse nameIn19-S4-CS3042 - Database Systems"
    },
  ];
  return (
    <ul className="list-group">
      {courses.map((data) => (
        <li className="list-group-item">
          <div className="crs-id">
            <p>{data.dep}</p>
          </div>
          <a href="/">
            <p className="crs-name">{data.name}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default List;
