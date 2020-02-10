
// Fn: mock server call
const getFromServer = () => {
    global._serverInvoked = true
    return { 'available': ['jesus', 'odin', 'zeus', 'antares', 'juan'] }
} 

// Create client
const cache = require('../../index')
cache.connect2(global.server, global.strategy === 'redis')

// Get Personajes 
module.exports.getPersonajes = async () => {

    // use from cache if is available, either go to server
    const personajes = await cache.get('personajes') || await getFromServer()
    
    // if its truthy , store it
    personajes && await cache.set('personajes', personajes)
    
    return personajes
}
