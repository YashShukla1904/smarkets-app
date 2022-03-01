import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import { getPopularEventIds } from '../../api'
import PopularEventCard from '../../components/popularEventCard/PopularEventCard'

import './popularEventsList.css'


function PopularEventsList() {
    const params = useParams()
    const [isLoading, setLoading] = useState(true)
    const [eventIds, setEventIds] = useState([])

    const selectedPopularEventCategory = params.categoryName

    useEffect(() => {
        if (selectedPopularEventCategory) {
            setLoading(true)
            getPopularEventIds(selectedPopularEventCategory.toLowerCase()).then(response => {
                setEventIds(response.popular_event_ids)
                setLoading(false)
            })
        }
    }, [selectedPopularEventCategory])

    if (!selectedPopularEventCategory) {
        return <div className='popular-event-list-container'><p>Select a popular event category</p></div>
    }

    if (isLoading) {
        return <div className='popular-event-list-container'><p>Fetching events...</p></div>
    } else {
        if (eventIds.length > 0) {
            return (
                <>
                <h5 className='module-heading'>POPULAR EVENTS</h5>
                    <ul className='popular-event-list-container'>
                        {eventIds.map(eventId => <PopularEventCard eventId={eventId} key={eventId} />)}
                    </ul>
                </>)
        } else {
            return <div className='popular-event-list-container'>
                <p>No popular events found</p>
            </div>
        }

    }
}

export default PopularEventsList