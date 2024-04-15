import {WebSocketServer} from 'ws';
const s = new WebSocketServer({ port: 5001});

//server side
s.on('connection', function connection(ws) {
    ws.on('message', function message(data) {
        data = JSON.parse(data);
        if(data.type == "name") {
            ws.personName = data.data;
            return;
        }
        console.log('received: %s', data);

        s.clients.forEach(function e(client) {
            if(client != ws) 
            client.send(JSON.stringify({
                name: ws.personName,
                data: data.data
            }));
        })
        // ws.send("i recieved your msg :) "+data);
      });
})