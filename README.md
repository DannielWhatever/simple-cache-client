
# simple-cache-client  
  
[![Build Status](https://travis-ci.com/DannielWhatever/simple-cache-client.svg?branch=master)](https://travis-ci.com/DannielWhatever/simple-cache-client)

**ALPHA: JUST 4 testing purpose**  
  
* only supports JSON values  
* ttl set in 100 seconds by default  
  
### how to  
  
#### how to connect using simple-cache-client?  
  
```
const cache = require('./simple-cache-client')
// Connect to server
cache.connect2('localhost:11211') // For Memcached
// For Redis : cache.connect2('redis://localhost:6379', true)

// await cache.set('foo', 'bar')
// const resp = await cache.get('foo')


```


1. `const cache = require('./simple-cache-client')`  
2. Connect to server  
    * For Memcached: `cache.connect2('localhost:11211')`  
    * For Redis     : `cache.connect2('redis://localhost:6379', true)`  
3. `await cache.set('foo', 'bar')`  
4. `const resp= await cache.get('foo')`  
  
#### how to change ttl  
  
1. using memcached, u can only set TTL before connect to server  
2. `cache.setTTL(3600)` in Seconds  
  
### Testing  
  
#### test with memcached  
- `docker pull memcached`  
- `docker run --name chuli -p11211:11211 -d memcached`  
  
#### test with redis  
- `docker pull redis`  
- `docker run --name chale -p 6379:6379  -d redis `  
  
#### purge cache  
- memcached , use: `echo 'flush_all' | nc localhost 11211`  
- redis , con redis-client, if u dnt have it, mata la wea noma'  
  
#### kill containers  
- `docker rm $(docker stop $(docker ps -qa))`  
  

