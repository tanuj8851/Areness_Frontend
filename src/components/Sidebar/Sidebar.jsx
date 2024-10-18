import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

export const Sidebar=({ isOpen, toggleSidebar }) =>{

    const {user,logoutUser} = useContext(UserContext);
    return (
        <div className={`fixed inset-0 bg-red-500 text-white p-6 flex flex-col justify-between transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 lg:w-1/5 transition-transform duration-200 ease-in-out z-50`}>
            <div>
                <div className="flex flex-col items-center mb-8">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s" alt="User profile" className="rounded-full w-12 h-12 mb-4" />
                    <div className="text-center">
                        <h2 className="font-semibold">{`${user.firstName} ${user.lastName}`}</h2>
                        <p className="text-sm">{user.email}</p>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li className="mb-4">
                            <Link to={"/"} className="flex items-center text-white">
                                <i className="fas fa-tachometer-alt mr-3"></i>
                                Dashboard
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link to={"/"} className="flex items-center text-white">
                                <i className="fas fa-exclamation-circle mr-3"></i>
                                Vital Task
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link to={"/"} className="flex items-center text-white">
                                <i className="fas fa-tasks mr-3"></i>
                                My Task
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link to={"/"} className="flex items-center text-white">
                                <i className="fas fa-list mr-3"></i>
                                Task Categories
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link to={"/"} className="flex items-center text-white">
                                <i className="fas fa-cog mr-3"></i>
                                Settings
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link to={"/"} className="flex items-center text-white">
                                <i className="fas fa-question-circle mr-3"></i>
                                Help
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <Link href="#" className="flex items-center text-white" onClick={()=>logoutUser()}>
                    <i className="fas fa-sign-out-alt mr-3"></i>
                    Logout
                </Link>
            </div>
            <button className="lg:hidden absolute top-4 right-4 text-white" onClick={toggleSidebar}>
                <i className="fas fa-times text-2xl"></i>
            </button>
        </div>
    );
}
