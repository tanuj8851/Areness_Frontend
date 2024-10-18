import React, { useContext, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import MainContent from './../../components/Maincontent/MainContent';
import { UserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // const Navigate= useNavigate()

  // const { user } = useContext(UserContext);

  // if (!user) {
  //   return <Navigate to="/login" />;
  // }


  return (
    <div className="flex h-screen flex-col">
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <MainContent />
      </div>
    </div>
  )
}

export default Home