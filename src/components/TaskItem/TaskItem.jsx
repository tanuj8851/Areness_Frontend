import React from 'react'

const TaskItem = ({ title, description, priority, status, date, image }) => {
    return (
        <div className="bg-gray-100 p-4 rounded mb-4 flex items-start">
            <div className="flex-1">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-600">{description}</p>
                <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-500">Priority: {priority}</span>
                    <span className="text-sm text-gray-500">Status: {status}</span>
                    <span className="text-sm text-gray-500">Created on: {date}</span>
                </div>
            </div>
            <img src={image} alt="Task related" className="w-12 h-12 rounded ml-4" />
        </div>
    )
}

export default TaskItem