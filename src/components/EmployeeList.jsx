import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
  const [employ, setEmploy] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/employee")
      .then((res) => setEmploy(res.data));
  }, []);

  console.log(employ);
  return (
    <div
      className="list_container"
    >
      {employ.map((e) => (
        <Link to={`/employees/${e.id}`}>
          <div
            className="employee_card"
          >
            <img src={e.image} alt="image" className="employee_image" />
            <span className="employee_name">{e.employee_name}</span>
            <span className="employee_title">{e.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};
