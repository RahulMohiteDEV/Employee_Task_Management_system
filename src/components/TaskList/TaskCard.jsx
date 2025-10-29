import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const TaskCard = ({ data, taskIndex, employeeId }) => {
    const [userData, setUserData] = useContext(AuthContext)

    const updateTaskStatus = (newStatus) => {
        const updatedData = userData.map(employee => {
            if (employee.id === employeeId) {
                const updatedTasks = employee.tasks.map((task, index) => 
                    index === taskIndex ? { ...task, ...newStatus } : task
                )
                
                const taskCounts = { ...employee.taskCounts }
                // Decrement old status
                if (data.newTask) taskCounts.newTask--
                if (data.active) taskCounts.active--
                if (data.completed) taskCounts.completed--
                if (data.failed) taskCounts.failed--
                
                // Increment new status
                if (newStatus.active) taskCounts.active++
                if (newStatus.completed) taskCounts.completed++
                if (newStatus.failed) taskCounts.failed++

                return { ...employee, tasks: updatedTasks, taskCounts }
            }
            return employee
        })

        setUserData(updatedData)
        localStorage.setItem('employees', JSON.stringify(updatedData))
    }

    const getStatusColor = () => {
        if (data.completed) return 'border-green-500'
        if (data.failed) return 'border-red-500'
        if (data.active) return 'border-blue-500'
        return 'border-yellow-500'
    }

    const getStatusText = () => {
        if (data.completed) return 'Completed'
        if (data.failed) return 'Failed'
        if (data.active) return 'In Progress'
        return 'New'
    }

    return (
        <div className={`flex-shrink-0 p-4 w-80 bg-gray-700 rounded-lg border-l-4 ${getStatusColor()} text-white shadow-lg`}>
            <div className='flex justify-between items-center mb-3'>
                <span className='bg-gray-600 px-2 py-1 rounded text-sm'>{data.category}</span>
                <div className='text-right'>
                    <div className='text-xs text-gray-300'>{data.taskDate}</div>
                    <div className='text-xs font-medium'>{getStatusText()}</div>
                </div>
            </div>
            
            <h3 className='font-semibold text-lg mb-2'>{data.taskTitle}</h3>
            <p className='text-sm text-gray-300 mb-4 line-clamp-3'>{data.taskDescription}</p>
            
            {!data.completed && !data.failed && (
                <div className='flex gap-2'>
                    {data.newTask && (
                        <button 
                            onClick={() => updateTaskStatus({ newTask: false, active: true })}
                            className='flex-1 bg-blue-500 hover:bg-blue-600 py-2 px-3 rounded text-sm transition-colors'
                        >
                            Start Task
                        </button>
                    )}
                    {data.active && (
                        <>
                            <button 
                                onClick={() => updateTaskStatus({ active: false, completed: true })}
                                className='flex-1 bg-green-500 hover:bg-green-600 py-2 px-3 rounded text-sm transition-colors'
                            >
                                Complete
                            </button>
                            <button 
                                onClick={() => updateTaskStatus({ active: false, failed: true })}
                                className='flex-1 bg-red-500 hover:bg-red-600 py-2 px-3 rounded text-sm transition-colors'
                            >
                                Failed
                            </button>
                        </>
                    )}
                </div>
            )}
        </div>
    )
}

export default TaskCard