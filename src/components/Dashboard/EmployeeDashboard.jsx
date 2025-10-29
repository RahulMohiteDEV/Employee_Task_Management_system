import React from 'react'
import Header from '../others/Header'
import TaskList from '../others/TaskList'
import TList from '../TaskList/TList'

const EmployeeDashboard = (props) => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6'>
      <div className='max-w-7xl mx-auto'>
        <Header changeUser={props.changeUser} data={props.data}/>
        
        {/* Welcome Section */}
        <div className='mt-8 mb-8'>
          <h1 className='text-3xl font-bold text-white mb-2'>
            Welcome back, <span className='text-emerald-400'>{props.data.firstName}</span>! 👋
          </h1>
          <p className='text-slate-400 text-lg'>
            Here's your task overview for today
          </p>
        </div>

        <TaskList data={props.data}/>
        <TList data={props.data}/>
      </div>
    </div>
  )
}

export default EmployeeDashboard