import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { CardLibrary } from 'components/UI/organism'
import "./library.scss"
import { NoInfo } from 'components/UI/molecule'
import { fetchPlaylist } from 'store/slices/playlists'
import { useAppDispatch, useAppSelector } from 'store/index'

export const Library = () => {
  const [isLoading, setIsLoading] = useState(true)

  const {playlists} = useAppSelector(state => state.playlists)
  const {favorites } = useAppSelector(state => state.favorites)
  

  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(fetchPlaylist())
    // dispatch(favorites())
    setIsLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])
  

  const navigate = useNavigate()

  const playPlaylist = (id: string) => {
    navigate('/player', { state: { id: id } })
  }

  return (
    <div className='pages__container'>
      {isLoading ? <NoInfo text="Cargando.." /> :
        <CardLibrary
          playlists={playlists}
          playPlaylist={playPlaylist}
          favorites={favorites}
        />}

    </div>
  )
}


export default Library





// import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router'
// import apiClient from "spotify"
// import { CardLibrary } from 'components/UI/organism'
// import "./library.scss"
// import { NoInfo } from 'components/UI/molecule'

// export const Library = () => {
//   const [playlists, setPlaylists] = useState()
//   const [favorites, setFavorites] = useState([])
//   const [isLoading, setIsLoading] = useState(true)

//   const getArray = JSON.parse(localStorage.getItem('Favorites' || '0'))

//   useEffect(() => {
//     apiClient.get('/browse/featured-playlists')
//       .then(res => {
//         setPlaylists(res.data.playlists.items)
//         setIsLoading(false)
//       })
//     if (getArray !== null) {
//       setFavorites([...getArray])
//     } else {
//       localStorage.setItem('Favorites', JSON.stringify(favorites))
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   const saveFav = (props) => {
//     let array = favorites
//     let addArray = true
//     array.forEach((item, key) => {
//       if (item === props.playlist.id) {
//         array.splice(key, 1)
//         addArray = false
//       }
//     });
//     if (addArray) {
//       array.push(props.playlist.id)
//     }
//     setFavorites([...array])
//     localStorage.setItem('Favorites', JSON.stringify(favorites))

//     let storage = localStorage.getItem('favItem' + (props.playlist.id))
//     if (storage === null) {
//       localStorage.setItem(('favItem' + (props.playlist.id)), JSON.stringify(props.playlist))
//     } else {
//       localStorage.removeItem('favItem' + (props.playlist.id))
//     }
//   }

//   const navigate = useNavigate()

//   const playPlaylist = (id) => {
//     navigate('/player', { state: { id: id } })
//   }

//   return (
//     <div className='pages__container'>
//       {isLoading ? <NoInfo text="Cargando.." /> :
//         <CardLibrary
//           playlists={playlists}
//           playPlaylist={playPlaylist}
//           favorites={favorites}
//           saveFav={saveFav}
//         />}

//     </div>
//   )
// }


// export default Library