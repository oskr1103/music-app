import React from 'react'
import './albuminfo.scss'
import { Songcard } from 'interface/interface'

export const AlbumInfo: React.FC<Songcard> = ({ album }) => {
    const artists: string[] = []
    album?.artists?.forEach((element) => {
        artists.push(element.name)
    })

    return (
        <div className="album-info">
            <div className="album-info__container">
                <div className="album-info__container-marquee">
                    <p>{album.name + ' - ' + artists?.join(', ')}</p>
                </div>
            </div>
            <div className="album-info__text">
                <p>{`${album?.name} es un ${
                    album?.album_type
                } de ${artists?.join(', ')} con ${
                    album?.total_tracks
                } pista(s)`}</p>
            </div>
            <div className="album-info__release">
                <p>Fecha de lanzamiento: {album?.release_date}</p>
            </div>
        </div>
    )
}

export default AlbumInfo
