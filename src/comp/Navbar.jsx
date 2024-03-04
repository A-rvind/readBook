
import React from 'react'
import { FaBookReader } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import Home from './Home';


export default function Navbar ({children}) {
  return (
    <aside className='h-screen flex'>
        <nav className='h-full flex flex-col bg-white border-r shadow-sm '>
            <div className='p-4 pb-2 flex just-between item-center'>
                <FaBookReader className='flex justify-between item-center w-32 ml-3' />
                <span>Oku</span>
            </div>

            <ul className='flex-1 px-3'>{children}</ul>
            <div className='border-t flex p-3'>
                <img 
                
                src='https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0='
                alt=''
                className='w-10 h-10 rounded-md'/>
                <div className={'flex justify-between item-center w-52 ml-3'}>
                    
                       <h4 className="font-semibold ">arvind</h4> 
                       
                    
                    <IoIosMore size={30}/>

                </div>
                </div>

        </nav>
        <Home/>
    </aside>
  )
}



