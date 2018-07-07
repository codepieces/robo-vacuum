const {CommandType} = require('../constants');

class RoboVacuum {
    constructor(room, movementStrategy) {
        this._room = room;
        this._movementStrategy = movementStrategy;
        this._commandToMoveStrategyMap = {
            [CommandType.Left]: this._movementStrategy.turnLeft,
            [CommandType.Move]: this._movementStrategy.moveForward, 
            [CommandType.Right]: this._movementStrategy.turnRight 
        }
    }

    get position() {
        return this._position;
    }

    processCommand(command) {
        const movementStrategyParams = {
            position: this._position,
            room: this._room
        }
        const {type} = command;
        switch (type) {
            case CommandType.Left:
            case CommandType.Move:
            case CommandType.Right:
                this._position = this._commandToMoveStrategyMap[type](movementStrategyParams);
                break;
            case CommandType.Place:
                const {params} = command;
                if (this._room.isInside(params)) {
                    this._position = params;
                }
                break;
            case CommandType.Report:
                console.log(`Current Position: ${JSON.stringify(this._position)}`);
                break;
        }
    }
}

module.exports = RoboVacuum;