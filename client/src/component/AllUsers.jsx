import React,{useState} from "react";
import axios from "axios";
const AllUsers = (props) => {
   console.log(props.data);
   const[email,setEmail]=useState("")
  return(
    <>
    <h2 className="centre">USERS LIST</h2>
    <div className="k">
      <table className="styled-table">
        <tr>
            <th >Company</th>
            <th >Name</th>
            <th >Email</th>
            <th >Number</th>
            <th >Adress</th>
            <th >Gender</th>
            <th >Action</th>
        </tr>
    {props.data.map((element,index)=>{
      return(
         <tr key={index}className="active-row">
            <td>{element.company}</td>
            <td>{element.name}</td>
            <td>{element.email}</td>
            <td>{element.number}</td>
            <td>{element.adress}</td>
            <td>{element.gender}</td>
            <td><input placeholder="update" onChange={(event)=>{setEmail(event.target.value)}}></input></td>
            <td><button onClick={()=>{
              axios.put(`http://localhost:5000/update/${element.number}`,{email})
              window.location.reload()
            }}>✅</button>
            <button onClick={()=>{
          axios.delete(`http://localhost:5000/delete/${element.number}`)
        window.location.reload()
        }}>❌</button></td></tr>
        
        
      )
    })}
     </table>
  </div></>
    
)};

export default AllUsers;