const express = require('express');
const express_ws = require('express-ws');

const onListenMessage = require('./message')
const app = express();
const wsObj = {};
const port = 8044;
const HEADER_MESSAGE = 1000;
express_ws(app);



app.ws('/socketServer/:uid', (ws, req) => {
  const uid = req.params.uid;
  wsObj[uid] = ws;
  console.log(`用户:${uid}已上线`)
  ws.onmessage = (msg) => {
    onListenMessage(msg, {
      params: req.params,
      query:req.query
    }, ws, wsObj)
  }
});

app.listen(port);
console.log(`监听127.0.0.1:${port}`)