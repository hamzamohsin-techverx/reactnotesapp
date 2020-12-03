import React from 'react';
import {NavLink} from 'react-router-dom';

const SideMenu = () => {
    return (
        <>
        <ul className="sidebar-nav">
            <li><NavLink exact className="active_class" to="/">Notes</NavLink></li>
            <li><NavLink exact className="active_class" to="/EditLabels">Edit Labels </NavLink></li>
            <li> <NavLink exact className="active_class" to="/Reminder">Reminder</NavLink></li>
            <li> <NavLink exact className="active_class" to="/Trash/hamza">Trash</NavLink></li>
            <li><NavLink exact className="active_class" to="/Search">Search</NavLink></li>
        </ul>
        </>
    );

}

export default SideMenu;