import React from 'react'
import { Link } from 'react-router-dom';

export const NavigationItem = ( { text, link } ) => {
    return (
        <li class="menu-item">
            <Link to={link}>{text}</Link>
        </li>
    )
}
