import React, { useState } from 'react';
import { BiBook, BiBookmarkPlus } from 'react-icons/bi';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegMap
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Books from '../pages/Books';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/books",
            name:"Books",
            icon:<BiBook/>
        },
        {
            path:"/venues",
            name:"Venues",
            icon:<FaRegMap/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="react">React.js</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;