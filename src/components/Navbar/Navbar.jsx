import React from 'react';
export default function Navbar({ toggleSidebar }) {

  return (


    <div className="bg-white p-4 shadow flex justify-between items-center">
      <div className="flex items-center">
        <button className="lg:hidden mr-4" onClick={toggleSidebar}>
          <i className="fas fa-bars text-red-500 text-2xl"></i>
        </button>
        <span className="text-red-500 text-2xl font-bold">Dash<span className='text-black'>board</span></span>
      </div>
      <div className="relative w-1/3 hidden lg:block">
        <input type="text" placeholder="Search your task here..." className="w-full p-2 rounded border border-gray-300 pr-10" />
        <i className="fas fa-search absolute right-2 top-3 text-gray-500"></i>
      </div>
      <div className="flex items-center">
        <i className="fas fa-calendar-alt text-red-500 text-xl mr-4"></i>
        <i className="fas fa-bell text-red-500 text-xl mr-4"></i> 
        <span className="text-gray-500 mr-4 hidden lg:block">Tuesday 20/06/2023</span>
      </div>
    </div>
  );
}
