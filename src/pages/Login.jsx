import React, { useState } from "react";
import { useAuthDispatch } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useAuthDispatch();

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const history = useNavigate();

  const handleSubmit = () => {
    if (username === "admin123" && password === "admin123") {
      dispatch("LOGIN", {
        username: username,
        password: password,
        type: "admin",
      });
      history("/");
    } else {
      alert("Username or Password is incorrect !");
    }
  };
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <h1>Login</h1>
      <div className='flex flex-col mt-5'>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          className='border-2 rounded-md h-6 p-4'
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className='flex flex-col mt-5'>
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          type='password'
          className='border-2 rounded-md h-6 p-4'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        onClick={handleSubmit}
        type='submit'
        className='border-2 rounded-md px-3 py-2 mt-4 hover:bg-gray-200'
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
