import React from 'react'
import { SidebarButton } from '../../atoms'
import { MdFavorite } from "react-icons/md"
import { RiHomeFill } from "react-icons/ri"
import { FaSignOutAlt } from "react-icons/fa"
import { FaPlay } from "react-icons/fa"
// import { FaGripfire, FaPlay } from "react-icons/fa"
// import { MdSpaceDashboard } from "react-icons/md"


const NavItem = ({ handleMenu }: any) => {

    const closeSession = () => {
        localStorage.removeItem('token')
        window.location.reload()
    }

    return (
        <div>
            <SidebarButton title="Mi Librería" link="/" icon={<RiHomeFill />} onClick={handleMenu} />
            <SidebarButton title="Reproducir" link="/player" icon={<FaPlay />} onClick={handleMenu} />
            <SidebarButton title="Favoritos" link="/favorites" icon={<MdFavorite />} onClick={handleMenu} />
            <SidebarButton title="Salir" link="./" icon={<FaSignOutAlt />} onClick={closeSession} />
            {/* <SidebarButton title="Feed" link="/feed" icon={<MdSpaceDashboard />} />
            <SidebarButton title="Tendencia" link="/trending" icon={<FaGripfire />} /> */}
        </div>
    )
}

export default NavItem