import React from 'react';
import { AlbumImage, AlbumInfo } from 'components/UI/atoms';
import { Songcard } from 'interface/interface';


const Album: React.VFC<Songcard> = ({ album }) => {
    return (
        <>
            <AlbumImage url={album?.images[0]?.url} />
            <AlbumInfo album={album} />
        </>
    );
};

export default Album;