import React from 'react'
import "./login.scss"
import { loginEndpoint } from 'spotify'
const Logo = require("assets/img/logo.png")

export const Login = () => {
    return (
        <div className='login'>
            <img src={Logo} alt="Logo Music App" className='login__logo' />
            <a href={loginEndpoint}><div className='login__btn'>Inicia sesión con Spotify</div></a>
        </div>
    )
}

export default Login
