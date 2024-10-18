import React, { useContext, useState } from 'react'
import "./Signup.css";
import signup_banner from "../../assests/signup_banner.png";
import { toast } from "react-hot-toast";
import { UserContext } from '../../context/userContext';
import { Link } from 'react-router-dom';


const Signup = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
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


    const signupData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      username: formData.username,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword
    };

    try {

      const response = await fetch('https://areness-backend-1.onrender.com/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });



      if (response.ok) {
        const data = await response.json();
        loginUser(data.activeUser);
        toast.success('Registration successful!');
      } else {
        const errorData = await response.json();
        toast.success(errorData.message || 'An error occurred during registration');
      }
    } catch (err) {
      toast.error('Network error: Unable to contact server');
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-red-500">
      <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row w-full h-5/6 md:w-4/5 lg:w-3/5">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src="https://placehold.co/400x400" alt="Illustration of a person interacting with digital interfaces" className="w-full h-full hidden md:block object-cover" />
        </div>
        <div className="w-full md:w-1/2 pl-0 md:pl-8">
          <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex items-center border rounded px-3 py-2">
              <i className="fas fa-user mr-2"></i>
              <input type="text" placeholder="Enter First Name"  name='firstName' className="w-full outline-none" value={formData.firstName} onChange={handleChange} />
            </div>
            <div className="flex items-center border rounded px-3 py-2">
              <i className="fas fa-user mr-2"></i>
              <input type="text" placeholder="Enter Last Name"  name='lastName' className="w-full outline-none" value={formData.lastName} onChange={handleChange} />
            </div>
            <div className="flex items-center border rounded px-3 py-2">
              <i className="fas fa-user mr-2"></i>
              <input type="text" placeholder="Enter Username"  name="username" className="w-full outline-none" value={formData.username} onChange={handleChange} />
            </div>
            <div className="flex items-center border rounded px-3 py-2">
              <i className="fas fa-envelope mr-2"></i>
              <input type="email" placeholder="Enter Email" className="w-full outline-none" name='email' value={formData.email} onChange={handleChange} />
            </div>
            <div className="flex items-center border rounded px-3 py-2">
              <i className="fas fa-lock mr-2"></i>
              <input type="password" placeholder="Enter Password" className="w-full outline-none" name='password' value={formData.password} onChange={handleChange} />
            </div>
            <div className="flex items-center border rounded px-3 py-2">
              <i className="fas fa-lock mr-2"></i>
              <input type="password" placeholder="Confirm Password" className="w-full outline-none" name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} />
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" name='agreed' checked={formData.agreed} onChange={handleChange} />
              <label>I agree to all terms</label>
            </div>
            <button className="bg-f95b5b text-white rounded px-4 py-2 w-full" type='submit'>Register</button>
          </form>
          <p className="mt-4 text-center">
            Already have an account? <Link to={"/login"} className="text-blue-500">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup