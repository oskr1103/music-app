import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import apiClient from '../../spotify'
import { SongCard, Queue } from '../../components/UI/organism'
import { AudioPlayer } from '../../container'
import "./player.scss"
import { NoInfo } from 'components/UI/molecule'
import {LocationParams, ITracks} from 'interface/interface'


export const Player = () => {

  const location = useLocation()
  const state = location.state as LocationParams
  const [tracks, setTracks] = useState<ITracks[]>([])
  const [currentTracks, setCurrentTracks] = useState<any>({})
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    apiClient
      .get(`playlists/${state?.id}/tracks`)
      .then(res => {
        setTracks(res.data.items)
        setCurrentTracks(res.data.items[0].track)
      })
      .catch((err) => console.warn(err))
  }, [state])

  useEffect(() => {
    try {
      setCurrentTracks(tracks[currentIndex].track)
      setIsLoading(false)
    } catch (error) {
      <NoInfo text="No se pudo reproducir" />
    }
  }, [currentIndex, tracks])

  return (
    <div className='pages__container'>
      {isLoading ? <NoInfo text="Cargando..." /> :
        <>
          <div className="player__top-body">
            <SongCard album={currentTracks.album} />
            <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
          </div>
          <div className="player__bottom-body">
            <AudioPlayer
              currentTracks={currentTracks}
              total={tracks}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex} />
          </div>
        </>
      }
    </div>
  )
}

export default Player

// import React, { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom'
// import apiClient from '../../spotify'
// import { SongCard, Queue } from '../../components/UI/organism/index.js'
// import { AudioPlayer } from '../../container'
// import { isEmpty } from 'lodash'
// import "./player.scss"
// import { NoInfo } from 'components/UI/molecule'

// export const Player = () => {

//   const location = useLocation()
//   const [tracks, setTracks] = useState([])
//   const [currentTracks, setCurrentTracks] = useState({})
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     apiClient
//       .get(`playlists/${location.state?.id}/tracks`)
//       .then(res => {
//         setTracks(res.data.items)
//         setCurrentTracks(res.data.items[0].track)
//       })
//       .catch((err) => console.warn(err))
//   }, [location.state])

//   useEffect(() => {
//     try {
//       setCurrentTracks(tracks[currentIndex].track)
//       setIsLoading(false)
//     } catch (error) {
//       <NoInfo text="No se pudo reproducir" />
//     }
//   }, [currentIndex, tracks])

//   return (
//     <div className='pages__container'>
//       {isLoading ? <NoInfo text="Cargando..." /> :
//         <>
//           <div className="player__top-body">
//             <SongCard album={currentTracks.album} />
//             <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
//           </div>
//           <div className="player__bottom-body">
//             <AudioPlayer
//               currentTracks={currentTracks}
//               total={tracks}
//               currentIndex={currentIndex}
//               setCurrentIndex={setCurrentIndex} />
//           </div>
//         </>
//       }
//     </div>
//   )
// }

// export default Player