import React from 'react'
import "./songcard.scss"
import { Album } from '../../molecule'
import {Songcard} from 'interface/interface'

const SongCard: React.VFC<Songcard> = ({album}) => {

  return (
    <div className='songcard__body flex'>
      <Album album={album} />
    </div>
  )
}

export default SongCard