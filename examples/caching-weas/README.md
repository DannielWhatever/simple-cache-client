

#### run with memcached
- docker pull memcached
- docker run --name chuli -p11211:11211 -d memcached
- node index.js

#### run with redis
- docker pull redis
- docker run --name chale -p 6379:6379  -d redis 
- node index.js


#### kill containers
- docker rm $(docker stop $(docker ps -qa)) 


#### purge cache
- memcached , use: echo 'flush_all' | nc localhost 11211 
- redis , con redis-client, if u dnt have it, mata la wea noma'