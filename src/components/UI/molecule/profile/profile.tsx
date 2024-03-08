import React from 'react'
import './profile.scss'

const Profile = ({ userImage, userName }: any) => {
    return (
        <div className="profile">
            <img src={userImage} className="profile__image" alt={userName} />
            <p className="profile__name">{userName}</p>
        </div>
    )
}

export default Profile
