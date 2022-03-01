import React from 'react';
import { useParams } from "react-router-dom";

import EventCategoryListItem from '../../components/eventCategoryListItem/EventCategoryListItem'

import './PopularEventsCategory.css'

function PopularEventsCategory() {
    const params = useParams()
    const selectedPopularEventCategory = params.categoryName

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
        <>
            <h5 className='module-heading popular-events-category-heading'>CATEGORIES</h5>
            <nav>
                <ul className='popular-events-category-list' aria-label="Categories">
                    {sports.map(sport => <EventCategoryListItem
                        name={sport.name}
                        icon={sport.icon}
                        key={sport.name}
                        urlPath={sport.urlPath}
                        selected={selectedPopularEventCategory && sport.urlPath === selectedPopularEventCategory} />)}
                </ul>
            </nav>
        </>
    )
}

export default PopularEventsCategory