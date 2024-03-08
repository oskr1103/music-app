export interface Welcome {
    message: string
    playlists: Playlists
}

export interface Playlists {
    href: string
    items: PlaylistsItem[]
    limit: number
    next: null
    offset: number
    previous: null
    total: number
}

export interface PlaylistsItem {
    collaborative: boolean
    description: string
    external_urls: ExternalUrls
    href: string
    id: string
    images: Image[]
    name: string
    owner: Owner
    primary_color: null
    public: null
    snapshot_id: string
    tracks: Tracks
    type: string
    uri: string
}

export interface ExternalUrls {
    spotify: string
}

export interface Image {
    height: null
    url: string
    width: null
}

export interface Owner {
    display_name: string
    external_urls: ExternalUrls
    followers: Followers
    href: string
    id: string
    images: any[]
    type: string
    uri: string
}

export interface Followers {
    href: null
    total: number
}

export interface Tracks {
    href: string
    total: number
}

export interface IPlaylistObject {
    description: string
    id: string
    images: IImages[]
    name: string
    artists: IArtists[]
    album_type: string
    release_date: string
    total_tracks: number
    tracks: ITracks
}

export interface IArtists {
    name: string
}

export interface IImages {
    id: string
    url: string
}

export interface IPlaylist {
    playlist: IPlaylistObject
    i: number
}

export interface LocationParams {
    id: string
}

export interface ITracks {
    track: track
    album: string
    total: string
}

export interface track {
    name: string
    id: string
}

export interface Props {
    playlists: IPlaylistObject[]
    playPlaylist: (status: string) => void
    favorites: IPlaylistObject[]
}

export interface Songcard {
    album: IPlaylistObject
}
