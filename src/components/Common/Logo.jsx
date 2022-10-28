import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo(props) {
    return (
        <Link to="/" data-uk-icon={props.icon}></Link>
    )
}