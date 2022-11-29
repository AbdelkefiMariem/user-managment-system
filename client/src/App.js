import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import AllUsers from './component/AllUsers.jsx'
import AddUser from './component/AddUser.jsx'
import './component/App.css'
function App() {
  const [view,setView] = useState("user");

  const[data,setData]=useState([])
  

  useEffect(()=>{
    axios.get("http://localhost:5000/all").then(res=>setData(res.data))
},[])

const changeView=(option) =>{
  setView(option)
}
const renderView=(option)=> {
    
  if (option === "user") { 
    return <AllUsers data={data}/>;
  } 
  else if(option==="adduser"){
    return <AddUser />
  }
}




return (
  <div>
        <nav className=" nav">
        <div
            className={
              view !== "add Product"
                ? "nav-unselected"
                : "nav-selected"
            }
            onClick={() => {
              changeView("adduser");
            }}
          >
            Add user
          </div>
          <div
            className={
              view === "Alluser"
            }
            onClick={() => changeView("user")}
          >
          </div>
          
        </nav>

    <div >
      {renderView(view)}
    
    </div>
  </div>
)
}

export default App;
