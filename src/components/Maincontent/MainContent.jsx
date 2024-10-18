import React from 'react'
import Header from './../Header/Header';
import ToDoList from '../TodoList/ToDoList';
import TaskStatus from './../TaskStatus/TaskStatus';

const MainContent = () => {
  return (
    <div className="flex-1 p-6">
    <Header />
    <div className="flex flex-col lg:flex-row mt-6">
        <ToDoList />
        <TaskStatus />
    </div>
</div>
  )
}

export default MainContent