import React from 'react'
import book from '../assets/openBook.png'
import { Search } from 'lucide-react'

const Home = () => {
  return (
    <>
    <div className='h-screen w-screen flex-col flex justify-center items-center'>
     <img className='h-12 w-15 m-2 flex justify-top items-top'
      src={book} alt="Homebook" />
  
        <h3 className='font-medium font-serif text-3xl mt-4'>Welcome to Oku!</h3> 
        <span className='m-2'>Let's start by building your reading list</span>
        
        <div className='relative flex items-center text-gray-400 focus-within:text-gray-600'>
        <Search className='w-5 h-5 mt-8 absolute ml-3 pointer-events-none'/>
        <input type='text'
                name='search'
                placeholder='Browser Explore'
                autoComplete='off'
                aria-label='Search book'
                className='pr-8 pl-10 py-2 text-center mt-8 font-semibold placeholder-gray-500 text-black rounded-lg border border-grey-600 ring-2 ring-gray-200 focus:ring-gray-500 focus:ring-2'></input></div>
                <button className="bg-black m-4 text-white font-medium py-2 pr-14 pl-10 px-4 rounded-lg">
                 Import from Goodreads
                  </button>
    </div>

    
    
     </>
  )
}

export default Home