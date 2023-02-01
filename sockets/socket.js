let serverInstance;
let paramsInstance;
const io = require('socket.io');

module.exports = (server, params = {}) => {
  if (!serverInstance) {
    serverInstance = server;
    paramsInstance = params;
  }

  return io(serverInstance, paramsInstance);
};
