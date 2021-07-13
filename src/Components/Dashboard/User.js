import React from 'react';
import { useSelector } from 'react-redux';

const User = () => {
    const user = useSelector(state => state.user)
    return (
        <div className='user'>
            <div className="user__avater">
                <img src="" alt="BQ" />
            </div>
            <div className="user__details">
                <p className="user__details__role">{user.role}</p>
                <h4 className="user__details__name">{user.name}</h4>
            </div>
        </div>
    );
}

export default User;
