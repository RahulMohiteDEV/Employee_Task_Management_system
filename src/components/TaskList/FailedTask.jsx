import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 p-5 h-full w-[300px] bg-yellow-500 rounded-xl text-white '>
                <div className='flex justify-between items-center '>
                    <h3 className='bg-orange-500 text-md px-3 py-1 rounded '>{data.category}</h3>
                    <h4 className='text-sm'>{data.taskDate} </h4>
                </div>
                <h2 className='font-semibold text-2xl mt-5'>{data.taskTitle}</h2>
                <p className='text-sm mt-3'>
                    {data.taskDescription}
                </p>
                <div className='mt-2'>
                    <button className='w-full'>Failed Task</button>
                </div>
            </div>

  )
}

export default FailedTask
