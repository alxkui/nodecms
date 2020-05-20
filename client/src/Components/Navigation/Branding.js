import React from 'react'

export const Branding = ({ link, title }) => {
    return (
        <a className="branding" href={link}>
            <h1>{title}</h1>
        </a>
    )
}
