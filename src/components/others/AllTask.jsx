import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData] = useContext(AuthContext)

    const getStatusColor = (count, type) => {
        if (count === 0) return 'bg-gray-600'
        if (type === 'failed') return 'bg-red-500'
        if (type === 'completed') return 'bg-green-500'
        if (type === 'active') return 'bg-blue-500'
        return 'bg-yellow-500'
    }

    return (
        <div className='p-6 bg-gray-800 rounded-lg mt-4'>
            <h2 className='text-xl font-semibold text-white mb-4'>Team Overview</h2>
            <div className='overflow-x-auto'>
                <div className='grid grid-cols-6 gap-4 p-4 bg-gray-700 rounded-lg mb-2 font-medium text-white'>
                    <div>Employee</div>
                    <div className='text-center'>New</div>
                    <div className='text-center'>Active</div>
                    <div className='text-center'>Completed</div>
                    <div className='text-center'>Failed</div>
                    <div className='text-center'>Total</div>
                </div>
                
                <div className='space-y-2 max-h-60 overflow-y-auto'>
                    {userData.map((employee, idx) => (
                        <div key={idx} className='grid grid-cols-6 gap-4 p-4 bg-gray-700 rounded-lg items-center'>
                            <div className='font-medium text-white'>{employee.firstName}</div>
                            {['newTask', 'active', 'completed', 'failed'].map((type) => (
                                <div key={type} className='text-center'>
                                    <span className={`inline-block px-3 py-1 rounded-full text-white text-sm ${getStatusColor(employee.taskCounts[type], type)}`}>
                                        {employee.taskCounts[type]}
                                    </span>
                                </div>
                            ))}
                            <div className='text-center text-white font-medium'>
                                {employee.tasks.length}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllTask