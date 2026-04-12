import { useContext, useState } from "react";
import { logo_url } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";



const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const statusNetwork = useOnlineStatus();

  const {loginUser} = useContext(UserContext);


  return (
    <div className="flex justify-between px-2 bg-pink-300 sm:bg-amber-100 lg:bg-green-100">
      <div className='logo-container'>
        <img className='w-35' src={logo_url} alt="Logo" /> 
      </div>
      <div className="flex  items-center">
        <ul className="flex">
          <li className="px-4">Network Status : {statusNetwork ?  "✅" : "🔴"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About us</Link></li>
          <li className="px-4"><Link to="/contactus">Contact us</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4">Cart</li>
         
          <button onClick={()=>{btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}} className="login">{btnName}</button>
           <li className="font-bold">UserName: {loginUser}</li>
        </ul>
      </div>
    </div>

  )
}

export default Header