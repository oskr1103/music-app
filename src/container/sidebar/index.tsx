import React, { useState } from 'react'
import { Navbar } from 'components/UI/organism'
import "./sidebar.scss"
import { RiMenu4Line } from 'react-icons/ri'
import { IconContext } from 'react-icons'


export const Sidebar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const handleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <>
            <figure>
                <IconContext.Provider value={{ size: "22px", className: "menu-icon", color: "#fff" }}>
                    <RiMenu4Line onClick={handleMenu} />
                </IconContext.Provider>
            </figure>
            <nav className={showMenu ? "sidebar__container active" : "sidebar__container"}>
                <Navbar handleMenu={handleMenu} />
            </nav>
        </>
    )
}


export default Sidebar
