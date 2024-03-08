import { useState, useEffect } from 'react'
import "./linkss.scss"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Library, Player, Favorites, Login } from "../pages"
import { Sidebar } from '../container'
import { setClientToken } from '../spotify'
import { NoInfo } from 'components/UI/molecule'

const Linkss = () => {

    const [token, setToken] = useState<string>("")

    useEffect(() => {
        // localStorage.setItem('Favorites', JSON.stringify([]))
        const token : string = window.localStorage.getItem("token") || "";
        const hash : string = window.location.hash;
        window.location.hash = "";
        if (!token && hash) {
            const _token : string = hash.split("&")[0].split("=")[1]
            window.localStorage.setItem("token", _token)
            setToken(_token)
            setClientToken(_token)
        } else {
            setToken(token)
            setClientToken(token)
        }

    }, [])

    return (!token ? <Login /> :
        <Router>
            <div className='main__body'>
                <Sidebar />
                <Routes>
                    <Route path='/' element={<Library />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/player" element={<Player />} />
                    <Route path="/login" element={<Navigate to="/" replace />} />
                    <Route path='*' element={<NoInfo text="Error 404, página no encontrada" />} />
                </Routes>
            </div>
        </Router>
    )
}

export default Linkss