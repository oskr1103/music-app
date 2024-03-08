import './cardlibrary.scss'
import { IconContext } from 'react-icons'
import { AiFillPlayCircle } from 'react-icons/ai'
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io'
import { IPlaylistObject, Props } from 'interface/interface'
import { setFavorites, deleteFavorites } from 'store/slices/favorites'
import { useAppDispatch } from 'store/index'

const CardLibrary: React.FC<Props> = ({
    playlists,
    playPlaylist,
    favorites,
}) => {
    const dispatch = useAppDispatch()

    const handleFav = (param: IPlaylistObject) => {
        dispatch(setFavorites(param))
    }

    const deleteFavorite = (param: string) => {
        dispatch(deleteFavorites(param))
    }

    return (
        <IconContext.Provider value={{ size: '20px' }}>
            <div className="library">
                {playlists?.map((playlist, i) => (
                    <div className="library__card" key={playlist.id}>
                        <figure>
                            <img
                                src={playlist?.images[0]?.url}
                                alt={playlist.name}
                                className="library__card--img"
                            />
                        </figure>
                        <div className="library__card--footer">
                            <p
                                className="card__footer--icon"
                                onClick={() => playPlaylist(playlist.id)}
                            >
                                <AiFillPlayCircle size="30px" color="#fff" />
                            </p>
                            <div className="card__footer--container">
                                <p className="card__footer--title">
                                    {playlist.name}
                                </p>
                                <p className="card__footer--subtitle">
                                    {playlist.tracks.total}
                                </p>
                            </div>
                            <div className="card__footer--fav">
                                {!!favorites.find(
                                    (value) => value.id === playlist.id
                                ) ? (
                                    <IoIosHeart
                                        onClick={() =>
                                            deleteFavorite(playlist.id)
                                        }
                                        style={{ color: 'red' }}
                                    />
                                ) : (
                                    <IoIosHeartEmpty
                                        onClick={() => handleFav(playlist)}
                                        style={{ color: 'red' }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </IconContext.Provider>
    )
}

export default CardLibrary
