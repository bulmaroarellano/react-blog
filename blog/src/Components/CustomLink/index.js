import React from 'react'
import {
    NavItem,
    NavLink
} from 'reactstrap'

const CustomLink = props => {
    const { page, text, handler } = props
    return (
        <NavItem>
            <NavLink 
                href={`/${page}`}
                data-page={page}
                onClick={handler}
            >{ text }</NavLink>
        </NavItem>
    )
}

export default CustomLink