import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'

const Cards = ({name, value, increase , decrease, color}) => {
  return (
    <div className='w-[220px] mt-4 md:mt-0 p-4 bg-secondary rounded-lg'>
      <div className={`w-8 h-8 flex items-center justify-center rounded-lg ${color}`}>
        <FaShoppingBag />
      </div>
        <p className='text-gray-300 text-sm font-semibold mt-2 my-3'>{name}</p>
      <div className='flex items-center justify-between'>
        <p className='text-xl text-white font-bold'>{value}</p>
        {increase ? <p className='text-green-600'>&#9650; {increase}% </p>: undefined}
        {decrease ? <p className='text-red-600'>&#9660; {decrease}% </p>: undefined}
      </div>
    </div>
  )
}

export default Cards