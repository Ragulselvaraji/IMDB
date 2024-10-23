import React from 'react'
import Logo from '../movie.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex border text-xl pl-3 py-3 space-x-8'>
     <img className='w-[30px]' src={Logo} alt=""></img> 
      <Link to ="/" className='text-blue-400 text-3xl' >Movies</Link>
      <Link to ="/WatchList" className='text-blue-400 text-3xl'>WatchList</Link>
    </div>
  )
}

export default Navbar
