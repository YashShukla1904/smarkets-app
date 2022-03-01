import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../components/icon/Icon'

import './EventCategoryListItem.css'


function EventCategoryListItem(props) {
    const { name, icon, selected, onCategoryClick, urlPath } = props

    let className = `EventCategoryListItem ${selected ? 'selected' : ''}`

    return (
        <li onClick={onCategoryClick} className={className}>
            <Link to={`/category/${urlPath}`}>
                <span className='EventCategoryName'>
                    <i><Icon name={icon} /></i>
                    <span>{name}</span>
                </span>
                <i><Icon name='faChevronRight' /></i>
            </Link>
        </li>
    )
}

export default EventCategoryListItem