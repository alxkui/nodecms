import React from 'react'
import { NavigationItem } from './NavigationItem';
import { Branding } from './Branding';

export const Navigation = () => {
    return (
        <div className="navigation">
            <Branding link="/" title="NodeCMS"/>
            <nav>
                <ul className="menu">
                    <NavigationItem link="/" text="Dashboard" />
                    <NavigationItem link="/pages" text="Pages" />
                    <NavigationItem link="/posts" text="Posts" />
                    <NavigationItem link="/users" text="Users" />
                    <NavigationItem link="/seo" text="SEO Settings" />
                    <NavigationItem link="/settings" text="Settings" />
                </ul>
            </nav>

        </div>
    )
}
