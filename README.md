Socket-Charts
=============

Real-time charts you can communicate with using socket.io

## Basic Set-up
- npm install socket.io express
- node app.js
- http://localhost:3001/graph.html

## Update the Graph
```
curl -v -X POST -d'{"point" : "4", "value" : "70"}' -H "Content-type: application/json" "http://localhost:3001/update"
```

Where point is the index of the point you want to update and value is the y-axis value
