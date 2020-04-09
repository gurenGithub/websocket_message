const Base = require('./base');

const SEND_MESSAGE = 1001;
class Heartbeat extends Base {
  constructor(options) {
    super(SEND_MESSAGE,options)
    
  }
  send() {
    this.ws.send(this._buildData({
      "test": '1'
    }))
  }

}
module.exports = Heartbeat