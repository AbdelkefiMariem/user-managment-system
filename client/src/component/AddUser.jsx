import axios from "axios";
import React, { useState } from "react";

const AddUser = () => {
   // console.log(add);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState(0)
    const [adress, setAdress] = useState("")
    const [company, setCompany] = useState("")

    const [gender, setGender] = useState("")

    console.log(name);
    console.log(email)
    console.log(number);
    console.log(adress);
    console.log(company)
    console.log(gender);
    const add=(para)=>{
        console.log(para);
        axios.post('http://localhost:5000/all',para)
    }
    return (
        <div className="k2">

            <h1>Create User</h1>
            <form>
                <label >Name</label>
                <input onChange={(event) => setName(event.target.value)}
                    type="text" placeholder="Your name.."></input>
                <label >E-mail</label>
                <input onChange={(event) => setEmail(event.target.value)}
                    type="text" placeholder="Your e-mail..."></input>
                <label >number</label>
                <input onChange={(event) => setNumber(event.target.value)}
                    type="text" placeholder="Your number.."></input>
                <label >Company <section></section></label>
                <select onChange={(event) => setCompany(event.target.value)}
                >
                    <option >Ooredoo</option>
                    <option >Telcom</option>
                    <option >Orange</option>
                </select>
                <label >adress</label>
                <input onChange={(event) => setAdress(event.target.value)}
                    type="text" placeholder="Your adress.."></input>


                <label >Gender <section></section></label>
                <select onChange={(event) => setGender(event.target.value)}
                >
                    <option >male</option>
                    <option >female</option>

                </select>


               
            </form>
<button className="nav" onClick={()=>{add({ name, email, gender, adress, number, company })

window.location.reload()

}}> OK</button>
        </div>
    )
}



export default AddUser;