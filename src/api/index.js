const herokuUrl = 'https://cors-anywhere.herokuapp.com/'
const baseUrl = 'https://api.smarkets.com/v3/'

function getPopularEventIds(selectedEventCategory) {
    const url = `${herokuUrl}${baseUrl}popular/event_ids/sport/${selectedEventCategory}/`

    return fetch(url)
        .then((response) => response.json())
        .then(data => data)
        .catch(err => err)
}


function getPopularEventDetails(eventId) {
    const url = `${herokuUrl}${baseUrl}events/${eventId}/`
    return fetch(url)
        .then(response => response.json())
        .then(data => data.events[0])
        .catch(err => err)
}

export { getPopularEventIds, getPopularEventDetails }