import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faBaseball, faFootball, faGolfBall, faSpinner, faBasketball } from '@fortawesome/free-solid-svg-icons'

function Icon(props) {
    const { name } = props

    switch (name) {
        case 'faBaseball': return <FontAwesomeIcon icon={faBaseball} />
        case 'faFootball': return <FontAwesomeIcon icon={faFootball} />
        case 'faGolf': return <FontAwesomeIcon icon={faGolfBall} />
        case 'faLoading': return <FontAwesomeIcon icon={faSpinner} spin />
        case 'faChevronRight': return <FontAwesomeIcon icon={faChevronRight} />
        case 'faBasketball': return <FontAwesomeIcon icon={faBasketball} />
        default: return <></>
    }
}

export default Icon