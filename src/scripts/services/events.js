import { baseUrl , lastEvents} from '/src/scripts/variables.js'

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?page=${lastEvents}`)
    return await response.json()
}

export { getEvents }