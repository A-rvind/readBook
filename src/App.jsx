
import { Home, Sun, Search,Highlighter, Bookmark, Eye, Check, Plus } from 'lucide-react'
import './App.css'
import { NavItem } from './comp/NavItem'
import Navbar from './comp/Navbar'

function App() {
  
  return (
    <>
      
          <Navbar>
            <NavItem icon={<Home size={20} />} text="Home" active />
            <NavItem icon={<Sun size={20} />} text="Feed"/>
            <NavItem icon={<Search size={20} />} text="Explore"/>
            <NavItem icon={<Highlighter size={20} />} text="Highlight"/>
            <div className="w-52 ml-3">Library</div>
            <NavItem icon={<Bookmark  size={20} />} text="To Read"/>
            <NavItem icon={<Eye size={20} />} text="Reading"/>
            <NavItem icon={<Check  size={20} />} text="Read"/>
            <div className="w-52 ml-3">Collection</div>
            <NavItem icon={<Plus size={20} className='border border-grey-600 rounded' />} text="Create New"/>
          
          </Navbar>
          
        
      
    </>
  )
}

export default App
