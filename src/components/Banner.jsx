import React from 'react'

function Banner() {
  return (
    <div className='h-[10vh] md:h-[75vh]  bg-cover bg-center flex items-end ' style={{backgroundImage : `url('https://assets-in.bmscdn.com/discovery-catalog/events/et00388085-pzkwhyfcjx-landscape.jpg')`}}>
      <div className='text-center w-full text-white bg-blue-900/60 text-xl p-1'>Amaran</div>
    </div>
  )
}

export default Banner
