import React from 'react'
import TaskCard from './TaskCard'

const TList = ({ data }) => {
    return (
        <div className='h-96 overflow-x-auto flex gap-4 py-4 mt-6'>
            {data.tasks.map((task, index) => (
                <TaskCard 
                    key={index} 
                    data={task} 
                    taskIndex={index}
                    employeeId={data.id}
                />
            ))}
            {data.tasks.length === 0 && (
                <div className='w-full text-center text-gray-400 py-8'>
                    No tasks assigned yet
                </div>
            )}
        </div>
    )
}

export default TList