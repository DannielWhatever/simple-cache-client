// PoC Elasticache Memcached

    // Just a simple cache client fr json values

// Dependencies
const MemcacheClient = require('memcache-client')


// variables
let _cache = undefined 
let _useRedis = false // memcached by default
let _TTL = 30 // in seconds

// Fn:setTTL
const setTTL = function(newTime) { _TTL = newTime }

// Fn:get
const get = async function(key) {
    const resp = await this._cache.get(key)
    console.debug(resp)
    return resp ? JSON.parse(_useRedis ? resp : resp.value) : null
}

// Fn:set
const set = async function (key, val) {
    _useRedis ?
        await this._cache.set(key, JSON.stringify(val), 'EX', _TTL):
        this._cache.set(key, JSON.stringify(val), { noreply: true })
}

// Fn:connect2
const connect2 = async function(server, useRedis) {
    console.debug('Connecting2', server)
    if (useRedis) {
        _useRedis = true
        this._cache = require('async-redis').createClient(server)
        this._cache.on('error', err => { console.error(err) })
    } else {
        const options = {
            server: { server, maxConnections: 3 },
            ignoreNotStored: true,
            connectTimeout: 8 * 1000, // in milliseconds
            lifetime: _TTL // TTL, in seconds
        }
        
        this._cache = new MemcacheClient(options)   
    }
}



// declare exports 
module.exports = {
    get,
    set,
    connect2,
    setTTL
}