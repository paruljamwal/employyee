import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const EmployeeDetails = () => {
const [employ,setEmploy]=useState({
  id: "",
  employee_name: "",
  employee_id: "",
  title: "",
  salary: "",
  image: "",
  username: "",
  password: "",
  tasks: [],
  status: "",
  team: "",
});
const {id}=useParams()
useEffect(()=>{
  axios.get('http://localhost:8080/employee/${id}').then((res)=>setEmploy(res.data))

},[])
console.log(employ)
  return (
  
      <div className="user_details">
      <img className="user_image" src={employ.image}></img>
      <h4 className="user_name">{employ.employee_name}</h4>
      <span className="user_salary">${employ.salary}</span>
      <span className="tasks">
        <li className="task">{employ.tasks}</li>
      </span>
      Status: <b className="status">{employ.status}</b>
      Title: <b className="title">{employ.title}</b>
     {/* Show this button only if user is not already terminated (users status is working) */}
     <button className="fire">Fire Employee</button>
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote">promote</button>
    </div>

    
 
    
  );
};
