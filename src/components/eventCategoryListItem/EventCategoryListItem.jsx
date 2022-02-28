import React from 'react'
import Icon from '../../components/icon/Icon'

import './EventCategoryListItem.css'


function EventCategoryListItem(props) {
    const { name, icon, selected, onCategoryClick } = props

    let className = `EventCategoryListItem ${selected ? 'selected' : ''}`

    return (
        <li onClick={onCategoryClick} className={className}>
            <span className='EventCategoryName'>
                <i><Icon name={icon} /></i>
                <span>{name}</span>
            </span>
            <i><Icon name='faChevronRight' /></i>
        </li>
    )
}

export default EventCategoryListItem