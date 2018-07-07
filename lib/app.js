const createCommandStream = require('./stream');
const {BasicMovementStrategy, RoboVacuum} = require('./robo');
const SquareRoom = require('./room');

class App {
    run() {
        const roboVacuum = new RoboVacuum(new SquareRoom(5), new BasicMovementStrategy());
        const commandStream = createCommandStream();
        commandStream.on('data', command => {
            roboVacuum.processCommand(command);
        });
    }
}

module.exports = App;