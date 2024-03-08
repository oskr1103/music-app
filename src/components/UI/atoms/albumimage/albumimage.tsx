import React from 'react'
import "./albumimage.scss"

interface props{
    url: string
}

export const AlbumImage: React.VFC<props> = ({ url }) => {
    return (
        <div className='album__image flex'>
            <img src={url} alt="cover album" className='album__image--cover' />
            <div className='album__image--shadow'>
                <img src={url} alt="shadow" className='album__image--shadow' />
            </div>
        </div>
    )
}

export default AlbumImage