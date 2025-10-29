import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext)
    const [formData, setFormData] = useState({
        taskTitle: '',
        taskDescription: '',
        taskDate: '',
        asignTo: '',
        category: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        
        const newTask = {
            ...formData,
            active: false,
            newTask: true,
            failed: false,
            completed: false,
            id: Date.now()
        }

        const updatedData = userData.map(employee => 
            employee.firstName === formData.asignTo 
                ? {
                    ...employee,
                    tasks: [...employee.tasks, newTask],
                    taskCounts: {
                        ...employee.taskCounts,
                        newTask: employee.taskCounts.newTask + 1
                    }
                }
                : employee
        )

        setUserData(updatedData)
        localStorage.setItem('employees', JSON.stringify(updatedData))
        
        // Reset form
        setFormData({
            taskTitle: '',
            taskDescription: '',
            taskDate: '',
            asignTo: '',
            category: ''
        })

        alert('Task created successfully!')
    }

    return (
        <div className='p-6 bg-gray-800 rounded-lg mt-4'>
            <h2 className='text-xl font-semibold text-white mb-4'>Create New Task</h2>
            <form onSubmit={submitHandler} className='space-y-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <input
                        name="taskTitle"
                        value={formData.taskTitle}
                        onChange={handleChange}
                        required
                        className='w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-emerald-500'
                        placeholder='Task Title'
                    />
                    <input
                        name="taskDate"
                        value={formData.taskDate}
                        onChange={handleChange}
                        required
                        type="date"
                        className='w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-emerald-500'
                    />
                    <input
                        name="asignTo"
                        value={formData.asignTo}
                        onChange={handleChange}
                        required
                        className='w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-emerald-500'
                        placeholder='Assign to (Employee Name)'
                    />
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        className='w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-emerald-500'
                    >
                        <option value="">Select Category</option>
                        <option value="Design">Design</option>
                        <option value="Development">Development</option>
                        <option value="Testing">Testing</option>
                        <option value="Meeting">Meeting</option>
                        <option value="Documentation">Documentation</option>
                    </select>
                </div>
                
                <textarea
                    name="taskDescription"
                    value={formData.taskDescription}
                    onChange={handleChange}
                    required
                    className='w-full h-32 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-emerald-500'
                    placeholder='Task Description'
                />
                
                <button 
                    type='submit'
                    className='w-full bg-emerald-600 hover:bg-emerald-700 py-3 rounded-lg text-white font-medium transition-colors'
                >
                    Create Task
                </button>
            </form>
        </div>
    )
}

export default CreateTask