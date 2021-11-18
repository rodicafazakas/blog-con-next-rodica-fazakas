import Link from "next/link";
import { useState } from "react";

const Login = () => {

  const [user, setUser] = useState({});

  const changeData = (event) => {
    setUser({
      ...user,
      [event.target.id]: event.target.value,
    });
  };
  
  const onSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
  }

  return (
    <>
      <form onSubmit = {onSubmit} autoComplete="off" noValidate> 
        <input type ="text" id="name" onChange={changeData} /> 
        <input type="text" id="image" onChange={changeData} /> 
        <button type="submit"> Submit </button>
      </form>
    </>  
  )
};


export default Login;
