import React from 'react'
import TaskItem from '../TaskItem/TaskItem'

const TaskStatus = () => {
  return (
    <div className="w-full lg:w-1/3">
    <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Task Status</h2>
        <div className="flex justify-between items-center">
            <div className="text-center">
                <div className="text-2xl font-semibold text-green-500">84%</div>
                <div className="text-gray-500">Completed</div>
            </div>
            <div className="text-center">
                <div className="text-2xl font-semibold text-blue-500">46%</div>
                <div className="text-gray-500">In Progress</div>
            </div>
            <div className="text-center">
                <div className="text-2xl font-semibold text-red-500">13%</div>
                <div className="text-gray-500">Not Started</div>
            </div>
        </div>
    </div>
    <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Completed Task</h2>
        <TaskItem
            title="Walk the dog"
            description="Take the dog to the park and bring treats as well."
            priority="Moderate"
            status="Completed"
            date="Completed 2 days ago."
            image="https://placehold.co/50x50"
        />
        <TaskItem
            title="Conduct meeting"
            description="Meet with the client and finalize requirements."
            priority="Moderate"
            status="Completed"
            date="Completed 2 days ago."
            image="https://placehold.co/50x50"
        />
    </div>
</div>
  )
}

export default TaskStatus