const herokuUrl = 'https://cors-anywhere.herokuapp.com/'
const baseUrl = 'https://api.smarkets.com/v3/'
const url = `${herokuUrl}${baseUrl}`

function getPopularEventIds(selectedEventCategory) {
    const requestUrl = `${url}popular/event_ids/sport/${selectedEventCategory}/`

    return fetch(requestUrl)
        .then((response) => response.json())
        .then(data => data)
        .catch(err => err)
}


function getPopularEventDetails(eventId) {
    const requestUrl = `${url}events/${eventId}/`
    return fetch(requestUrl)
        .then(response => response.json())
        .then(data => data.events[0])
        .catch(err => err)
}

export { getPopularEventIds, getPopularEventDetails }