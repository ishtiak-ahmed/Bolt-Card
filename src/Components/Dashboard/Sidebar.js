import React, {useState} from 'react';
import MenuItem from './MenuItem';
import User from './User';


const Sidebar = () => {
    const [dropdown, setDropdown] = useState('block');
    const [menu, setMenu] = useState('hide')
    const handleDropDown = () => {
        const className = dropdown === 'none' ? 'block' : 'none';
        setDropdown(className)
    }
    const handleMenu = () => {
        const className = menu === 'show' ? 'hide' : 'show';
        setMenu(className)
    }
    return (
        <div className="sidebar">
            <h2 className='brand'>
                <span className="material-icons-outlined icon">polymer</span> BoltCard
            </h2>
            <span className='mobile-menu' onClick={handleMenu}>&#9776;</span>
            <User />
            <div className={`menu ${menu}`}>
                <MenuItem icon='other_houses' name='Home' />
                <div className="menu_item active" onClick={handleDropDown}>
                    <span className="material-icons-outlined icon">payment</span> CardHolders
                    {
                        dropdown === 'block' ?
                        <span className="material-icons-outlined icon">keyboard_arrow_down</span>
                        : 
                        <span className="material-icons-outlined icon">keyboard_arrow_right</span>
                    }

                </div>
                <div className='dropdown' style={{display: `${dropdown}`}}>
                    <div className='dropdown__menu dropdown__active'>
                        <li>Fund Requests</li>
                    </div>
                    <div className='dropdown__menu'>
                        <li>Card Requests</li>
                    </div>
                </div>
                <MenuItem icon='account_circle' name='Aggretator' />
                <MenuItem icon='payments' name='Card Overview' />
                <MenuItem icon='manage_accounts' name='Manage Account' />
                <MenuItem icon='rate_review' name='Fee Overview' />
            </div>
        </div>
    );
}

export default Sidebar;
