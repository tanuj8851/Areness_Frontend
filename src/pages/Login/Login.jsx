import React, { useContext, useState } from 'react'
import "./Login.css";
import signup_banner from "../../assests/signup_banner.png";
import { toast } from "react-hot-toast";
import { UserContext } from '../../context/userContext';
import { Link } from 'react-router-dom';


const Login = () => {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    agreed: false,
  });

  const { loginUser } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);


    const loginData = {
      username: formData.username,
      password: formData.password,
    };


    try {

      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        loginUser(data.activeUser);
        toast.success('Login successful!');
      } else {
        const errorData = await response.json();
        toast.success(errorData.message || 'An error occurred during Login');
      }
    } catch (err) {
      toast.error('Network error: Unable to contact server');
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-red-500">
      <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row w-full h-5/6 md:w-4/5 lg:w-3/5">
        <div className="w-1/2">
          <h2 className="text-2xl font-bold mb-4">Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                <i className="fas fa-user text-gray-400 mr-2"></i>
                <input type="text" placeholder="Enter Username" name='username' className="w-full outline-none text-sm" value={formData.username} onChange={handleChange} />
              </div>
            </div>
            <div className="mb-3">
              <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                <i className="fas fa-lock text-gray-400 mr-2"></i>
                <input type="password" placeholder="Enter Password" name='password' className="w-full outline-none text-sm" value={formData.password} onChange={handleChange} />
              </div>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" name='agreed' checked={formData.agreed} onChange={handleChange} />
              <label>I agree to all terms</label>
            </div>
            <button className="bg-red-400 text-white px-4 py-2 rounded text-sm">Login</button>
          </form>
          <div className="mt-4">
            <p className="text-gray-600 text-sm">Or, Login with</p>
            <div className="flex space-x-2 mt-2">
              <button className="bg-blue-600 text-white px-3 py-2 rounded text-sm"><i className="fab fa-facebook-f"></i></button>
              <button className="bg-red-600 text-white px-3 py-2 rounded text-sm"><i className="fab fa-google"></i></button>
              <button className="bg-black text-white px-3 py-2 rounded text-sm"><i className="fab fa-apple"></i></button>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-600 text-sm">Don't have an account? <Link to={"/login"} className="text-blue-600">Create One</Link></p>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img src="https://placehold.co/400x400" alt="Illustration of a person standing next to a large smartphone with a checkmark on the screen" />
        </div>
      </div>
    </div>
  )
}

export default Login