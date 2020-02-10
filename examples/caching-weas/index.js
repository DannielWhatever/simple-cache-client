// PoC Elasticache

const log = console.log
//console.debug = q=>q

// globals +o(
global._serverInvoked = false
global.strategy = process.argv[2] == 'redis' ? 'redis' : 'memcached'
global.server = global.strategy === 'redis' ? 'redis://localhost:6379' :'localhost:11211'

// async block
;(async () => {
    log(`Cache choised: ${global.strategy}`)
    const personajes = await require('./getPersonajes').getPersonajes()
    log(`Server was ${(global._serverInvoked? '' : 'Not ')}invoked`)
    log('\'N the Output is: ')
    log(personajes)
    
    process.exit()
})()
