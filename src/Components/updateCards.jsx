import React from 'react'


const updateCards = (props) => {
  return (
    <div className='flex w-[270px] h-[130px] shadow-xl  shadow-gray-400 border-2 border-gray-300 rounded-2xl gap-3 justify-center items-center'>
      <div className={`text-3xl h-[40px] w-[40px] text-white ${props.color} border-2 border-none rounded-3xl flex items-center justify-center`}>{props.icon}</div>
      <div className='flex flex-col gap-1'>
        <div className=' text-2xl font-semibold text-gray-700 '>{props.title}</div>
       
            <div className='font-bold text-2xl'>
            {props.count}
            </div>
                    <div className='text-gray-400'>from last week</div>

            </div>
        
                    <div className='text-green-600 pt-1  font-semibold'>{props.per}%</div>

      
    </div>
  )
}

export default updateCards
