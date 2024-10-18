import React from 'react'
import TaskItem from './../TaskItem/TaskItem';

const ToDoList = () => {
  return (
    <div className="w-full lg:w-2/3 lg:mr-6 mb-6 lg:mb-0">
    <div className="bg-white p-6 rounded shadow">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">To-Do</h2>
            <button className="text-red-500">+ Add task</button>
        </div>
        <div className="mb-4">
            <h3 className="text-gray-500">20 June - Today</h3>
            <TaskItem
                title="Attend Nischal’s Birthday Party"
                description="Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements)"
                priority="Moderate"
                status="Not Started"
                date="20/06/2023"
                image="https://placehold.co/50x50"
            />
            <TaskItem
                title="Landing Page Design for TravelDays"
                description="Get the work done by EOD and discuss with client before leaving. (4 PM | Meeting Room)"
                priority="Moderate"
                status="In Progress"
                date="20/06/2023"
                image="https://placehold.co/50x50"
            />
            <TaskItem
                title="Presentation on Final Product"
                description="Make sure everything is functioning and all the necessities are properly met. Prepare the team and get the documents ready for..."
                priority="Moderate"
                status="In Progress"
                date="19/06/2023"
                image="https://placehold.co/50x50"
            />
        </div>
    </div>
</div>
  )
}

export default ToDoList