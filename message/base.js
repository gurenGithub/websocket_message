class Base {

  constructor(messageType, {
    options,
    ws,
    wss,
    data
  }) {

    this.ws = ws;
    this.options = options;
    this.wss = wss;
    this.data = data;
    this.setMessageType(messageType);

  }

  getMessageType() {

    return this.messageType;
  }
  setMessageType(messageType) {

    this.messageType = messageType;
  }

  getData() {

    return this.data;
  }

  setData(data) {

    this.data = data
  }


  _buildData(data) {

    let options = {
      msg_type: this.getMessageType()
    }
    Object.assign(options, data)

    return JSON.stringify(options);
  }





}

module.exports = Base