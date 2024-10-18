import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';

const Header = () => {

  const {user}= useContext(UserContext);
  const imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s';
  return (
    <div className="flex justify-between items-center">
    <h1 className="text-2xl font-semibold">Welcome back, {user.firstName} <span role="img" aria-label="wave">👋</span></h1>
    <div className="flex items-center">
        <div className="flex -space-x-2 mr-4">
            <img src={imageUrl} alt="User 1" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src={imageUrl} alt="User 2" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src={imageUrl} alt="User 3" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src={imageUrl} alt="User 4" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src={imageUrl} alt="User 5" className="w-8 h-8 rounded-full border-2 border-white" />
        </div>
        <button className="bg-red-500 text-white p-2 rounded">Invite</button>
    </div>
</div>
  )
}

export default Header