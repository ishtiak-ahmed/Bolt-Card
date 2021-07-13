import React from 'react';

const MenuItem = ({icon, name}) => {
    return (
        <div className='menu_item'>
            <span className="material-icons-outlined icon">{icon}</span> {name}
        </div>
    );
};

export default MenuItem;