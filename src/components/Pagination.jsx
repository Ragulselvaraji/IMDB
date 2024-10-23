import React from 'react'


function Pagination({pageNo,handleNext,handlePrev}) {
  return (
    <div className='bg-gray-400  flex justify-center m-4 p-2'>
        <div onClick={handlePrev} className="px-8 hover:cursor-pointer duration-300 hover:scale-110"><i className="fa-solid fa-arrow-left"></i></div>
        <div className="font-bold">{pageNo}</div>
        <div onClick={handleNext} className="px-8 hover:cursor-pointer duration-300 hover:scale-110"><i className="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination
