import React from 'react'
import "./queue.scss"
import {ITracks} from 'interface/interface'

interface props {
    tracks: ITracks[];
    setCurrentIndex: any
}

const Queue: React.VFC<props> = ({ tracks, setCurrentIndex }) => {
    return (
        <div className='queue flex'>
            <div className='queue__container flex'>
                <p className='queue__container--text'>
                    Siguiente
                </p>
                <div className='queue__container--list'>
                    {tracks?.map((track, i) => (
                        <div className='queue__container--list-container' onClick={() => setCurrentIndex(i)} key={i}>
                            <p className='queue__container--list-name'>{track?.track?.name}</p>
                            <p className='queue__container--list-time'>Demo 30s</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Queue