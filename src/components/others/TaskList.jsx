import React from 'react'

const TaskList = ({ data }) => {
    const stats = [
        { label: 'New Tasks', value: data.taskCounts.newTask, color: 'bg-yellow-500' },
        { label: 'Active', value: data.taskCounts.active, color: 'bg-blue-500' },
        { label: 'Completed', value: data.taskCounts.completed, color: 'bg-green-500' },
        { label: 'Failed', value: data.taskCounts.failed, color: 'bg-red-500' }
    ]

    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>
            {stats.map((stat, index) => (
                <div key={index} className={`p-6 rounded-xl text-white ${stat.color} shadow-lg`}>
                    <h2 className='text-3xl font-bold mb-2'>{stat.value}</h2>
                    <h3 className='text-lg font-medium'>{stat.label}</h3>
                </div>
            ))}
        </div>
    )
}

export default TaskList