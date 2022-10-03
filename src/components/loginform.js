import React, { useState} from "react";
import "./loginform.css"

const LoginForm =()=>{
    const [username,setusername]=useState("");
const [password,setpassword]=useState("");

const LoginFormHandle=()=>{

    console.table({username,password})

}
    return (<div>
<div className="flex flex-colum align-items-center">
                                <p>username</p>
				                <input  type="text" placeholder="username" value={username} onChange={(e)=>setusername(e.target.value)}/>
                                <p>Password</p>
				                <input type="password" placeholder="password" value={password} onChange={(e)=>setpassword(e.target.value)} /><br></br>
				                <button onClick={LoginFormHandle}>Sign In</button>
				               </div>
				      </div>     
    )
}
export default LoginForm