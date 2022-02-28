import React from 'react';
import { useParams, useNavigate } from "react-router-dom";

import EventCategoryListItem from '../../components/eventCategoryListItem/EventCategoryListItem'

import './PopularEventsCategory.css'

function PopularEventsCategory() {
    const params = useParams()
    const selectedPopularEventCategory = params.categoryName

    const navigate = useNavigate()

    function eventCategoryClickHandler(name) {
        navigate(`/category/${name}`)
    }

    const sports = [{
        name: 'Baseball',
        icon: 'faBaseball'
    },
    {
        name: 'Football',
        icon: 'faFootball'
    },
    {
        name: 'Golf',
        icon: 'faGolf'
    },
    {
        name: 'Basketball',
        icon: 'faBasketball'
    }]

    return (
        <ul className='popular-events-category-list'>
            {sports.map(sport => <EventCategoryListItem
                onCategoryClick={() => eventCategoryClickHandler(sport.name)}
                name={sport.name}
                icon={sport.icon}
                key={sport.name}
                selected={selectedPopularEventCategory && sport.name.toLowerCase() === selectedPopularEventCategory.toLocaleLowerCase()} />)}
        </ul>
    )
}

export default PopularEventsCategory