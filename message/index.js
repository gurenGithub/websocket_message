const Heartbeat = require('./heartbeat')
const types = require('./types')

/*
 根据msg_type获取到处理类
  */
const getController = (msg_type, wssOptions) => {
  let messageController;
  switch (msg_type) {

    case types.heartbeat:
      messageController = new Heartbeat(wssOptions);
      break;

  }
  return messageController
}

/*
转发中心
 */
const render = (msg, options, ws, wss) => {

  let {
    data
  } = msg;
  console.log(data);

  data = JSON.parse(data)
  let
    msg_type = data.msg_type;
  let wssOptions = {
    options,
    ws,
    wss,
    data

  }

  let messageController = getController(msg_type, wssOptions);

  if (messageController) {
    messageController.send();
  }
}

module.exports = render;