import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IconContext } from 'react-icons'
import "./sidebarButton.scss"

export const SidebarButton = ({ title, link, icon, onClick } : any) => {
    const location = useLocation();
    const isActive = location.pathname === link
    const btnClass = isActive ? "btn active" : "btn"
    return (
        <Link to={link} onClick={onClick}>
            <div className={btnClass}>
                <IconContext.Provider value={{ size: "22px", className: "bnt__icon" }}>
                    {icon}
                    <p className='btn__title'>{title}</p>
                </IconContext.Provider>
            </div>
        </Link>
    )
}

export default SidebarButton