import { CardLibrary } from 'components/UI/organism'
import { useNavigate } from 'react-router'
import { NoInfo } from 'components/UI/molecule'
// import { IPlaylist } from 'interface/interface'
// import { fetchFavorites } from 'store/slices/favorites'
import { useAppSelector } from 'store/index'

export const Favorites = () => {
    // const dispatch = useAppDispatch()
    const { favorites } = useAppSelector((state) => state.favorites)

    const navigate = useNavigate()

    const playPlaylist = (id: string) => {
        navigate('/player', { state: { id: id } })
    }

    return (
        <div className="pages__container">
            {favorites.length >= 1 ? (
                <CardLibrary
                    playlists={favorites}
                    playPlaylist={playPlaylist}
                    favorites={favorites}
                />
            ) : (
                <NoInfo text="No tienes favoritos" />
            )}
        </div>
    )
}

export default Favorites
