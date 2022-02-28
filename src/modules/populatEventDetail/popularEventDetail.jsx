import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import './popularEventDetail.css'
import { getPopularEventDetails } from '../../api';

function PopularEventDetail() {
    const eventDetailInStore = useSelector(state => state.eventDetail)
    const [detail, setDetail] = useState(null)
    const [loading, setLoading] = useState(false)

    const params = useParams()

    useEffect(() => {
        if (eventDetailInStore) {
            // When selected event detail is present in store - When user clicked on event from event list page
            setDetail(eventDetailInStore)
        } else {
            setLoading(true)
            // When selected event detail is not present in store - When user refresed event detail page
            getPopularEventDetails(params.eventId)
                .then(response => {
                    setDetail(response)
                    setLoading(false)
                }).catch(err => {
                    setDetail(null)
                })
        }
    }, [eventDetailInStore, params.eventId])

    if (detail) {
        const { name, start_date, short_name } = detail

        return <div className='popular-event-detail-container'>
            <h3>{name}</h3>
            <div className='row'>
                {start_date && <p><span>Start date</span><span>{start_date}</span></p>}
                {short_name && <p><span>Short name</span><span>{short_name}</span></p>}
            </div>
        </div>
    } else {
        if (loading) {
            return <div className='popular-event-detail-container'>
                <p>Fetching event detail...</p>
            </div>
        } else {
            return <div className='popular-event-detail-container'>
                <p>No event detail found</p>
            </div>
        }

    }
}

export default PopularEventDetail