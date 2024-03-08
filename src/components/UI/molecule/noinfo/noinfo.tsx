import React from 'react';
import "./noinfo.scss"

const NoInfo = ({ text }: any) => {
    return (
        <div className='noinfo'>
            <p className='noinfo__text'>{text}</p>
        </div>
    );
};

export default NoInfo;