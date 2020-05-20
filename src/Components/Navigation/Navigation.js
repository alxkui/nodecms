import React from 'react'
import { NavigationItem } from './NavigationItem';

export const Navigation = () => {
    return (
        <div className="navigation">
            <nav>
                <ul className="menu">
                    <NavigationItem text="Dashboard" />
                </ul>
            </nav>
        </div>
    )
}
