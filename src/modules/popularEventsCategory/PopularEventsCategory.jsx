import React from 'react';
import { useParams, useNavigate } from "react-router-dom";

import EventCategoryListItem from '../../components/eventCategoryListItem/EventCategoryListItem'

import './PopularEventsCategory.css'

function PopularEventsCategory() {
    const params = useParams()
    const selectedPopularEventCategory = params.categoryName

    const navigate = useNavigate()

    function eventCategoryClickHandler(urlPath) {
        navigate(`/category/${urlPath}`)
    }

    const sports = [{
        name: 'Baseball',
        icon: 'faBaseball',
        urlPath: 'baseball'
    },
    {
        name: 'Football',
        icon: 'faFootball',
        urlPath: 'football'
    },
    {
        name: 'Golf',
        icon: 'faGolf',
        urlPath: 'golf'
    },
    {
        name: 'Basketball',
        icon: 'faBasketball',
        urlPath: 'basketball'
    },
    {
        name: 'Ice Hockey',
        icon: 'faBasketball',
        urlPath: 'ice-hockey'
    }]

    return (
        <div>
            <h5 className='module-heading popular-events-category-heading'>CATEGORIES</h5>
            <ul className='popular-events-category-list'>
                {sports.map(sport => <EventCategoryListItem
                    onCategoryClick={() => eventCategoryClickHandler(sport.urlPath)}
                    name={sport.name}
                    icon={sport.icon}
                    key={sport.name}
                    selected={selectedPopularEventCategory && sport.urlPath === selectedPopularEventCategory} />)}
            </ul>
        </div>
    )
}

export default PopularEventsCategory