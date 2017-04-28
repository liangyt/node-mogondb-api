const url = require('url');

var wsServer = null;
var keepAlive = null;

var aliveCount = 0;

var wsService = {
    connection (ws) {
        // 连上一个添加一个在线人数
        aliveCount++;

        ws.on('message', function incoming(message) {
            wsServer.clients.forEach(function(client) {
                // 发送给自已
                // if(client == ws) {
                //     client.send("你刚才给服务端发送了数据：" + message)
                // }
                // 发送给其它人
                if(client != ws) {
                    var mo = JSON.parse(message);
                    mo.aliveCount = aliveCount;
                    client.send(JSON.stringify(mo))
                }
            })
        });

        ws.on('close', function() {
            aliveCount--
        })

        // 所有客户端的 onmessage 监听都会收到 这个是不是可以当作心跳保持呢
        keepAlive = setInterval(function() {
            // WebSocket.CONNECTING = 0;
            // WebSocket.OPEN = 1;
            // WebSocket.CLOSING = 2;
            // WebSocket.CLOSED = 3;
            if(ws.readyState === 1) {
                ws.send(JSON.stringify({keepAlive: 1}))
            } else {
                clearInterval(keepAlive)
            }
        }, 5000)
    },
    setWss (wss) {
        wsServer = wss
    }
};

module.exports = wsService;