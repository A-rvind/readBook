

export function NavItem({ icon, text, active, alert }){

    return(
        <li
          className={`relative flex item-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors
          ${
            active
            ? "bg-gray-100 text-slate-700"
            :"hover:bg-gray-100 text-gray-600"
          }
          `}> 
    
            {icon}
            
            <span className="w-52 ml-3">{text}</span>
            {alert &&(
                <div className={`absolute right-2 w-2 h-2 rounded bg-gray-500`}/>
            )
            
            }
        </li>
    )
}