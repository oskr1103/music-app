import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { NavItem, Profile } from '../../molecule/index'
import { useAppDispatch, useAppSelector } from 'store/index'
import { fetchProfile } from 'store/slices/profile'
import './navbar.scss'
const Logo = require('assets/img/logo.png')

interface props {
    handleMenu: any
}

const Navbar: React.FC<props> = ({ handleMenu }) => {
    const apiAvatar = 'https://ui-avatars.com/api/?name='

    const dispatch = useAppDispatch()
    const { profile }: any = useAppSelector((state) => state.profile)

    useEffect(() => {
        dispatch(fetchProfile())
    }, [dispatch])

    return (
        <>
            <Link to="/">
                <img src={Logo} className="image-logo" alt="Logo" />
            </Link>
            <NavItem handleMenu={handleMenu} />
            <Profile
                userName={profile.display_name}
                userImage={
                    profile.images > 0
                        ? profile.images[0].url
                        : `${apiAvatar}${profile.display_name}`
                }
            />
        </>
    )
}

export default Navbar
