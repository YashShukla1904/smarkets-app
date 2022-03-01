import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux'

import { getPopularEventDetails } from '../../api'
import Icon from '../icon/Icon'

import './PopularEventCard.css'
import { setEventDetailAction } from '../../redux/actionCreators';

function PopularEventCard(props) {
    const { eventId } = props

    const [eventData, setEventData] = useState(null)
    const [isFetchingData, setIsFetchingData] = useState(true)
    const [error, setError] = useState(null)

    const navigate = useNavigate()
    const params = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        getPopularEventDetails(eventId)
            .then(response => {
                setEventData(response)
                setIsFetchingData(false)
            }).catch(err => {
                setError(err)
                setEventData(null)
            })
    }, [eventId])

    function eventClickHandler() {
        dispatch(setEventDetailAction(eventData))
        navigate(`/event/${eventData.id}/category/${params.categoryName}`)
    }

    if (isFetchingData) {
        return <div className='popular-event-card'>
            <Icon name='faLoading' />
        </div>
    }

    if (error) {
        return <div className='popular-event-card'>
            <h4>Something went wrong</h4>
        </div>
    }

    if (eventData) {
        const { name } = eventData

        return (
            <li className='popular-event-card' onClick={eventClickHandler}>
                <h4>{name}</h4>
            </li>
        )
    }
}

export default PopularEventCard