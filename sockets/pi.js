const PiController = require('../controllers/PiController');
const piController = new PiController();

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('getPiStats', async (_, callback) => {
      callback(await piController.GetStats());
    });
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });
};
