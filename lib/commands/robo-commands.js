const {CommandType} = require('../constants');

class Command {
    constructor(type, params) {
        this._type = type;
        this._params = params;
    }

    isValidCommand() {
        return this._type && this._type !== CommandType.Invalid;
    }

    get params() {
        return this._params;
    }

    get type() {
        return this._type;
    }
}

class InvalidCommand extends Command {
    constructor() {
        super(CommandType.Invalid);
    }
}

class LeftCommand extends Command {
    constructor() {
        super(CommandType.Left);
    }
}

class MoveCommand extends Command {
    constructor() {
        super(CommandType.Move);
    }
}

class PlaceCommand extends Command {
    constructor(x, y, f) {
        super(CommandType.Place, {x, y, f});
    }
}

class ReportCommand extends Command {
    constructor() {
        super(CommandType.Report);
    }
}

class RightCommand extends Command {
    constructor() {
        super(CommandType.Right);
    }
}

module.exports = {
    InvalidCommand,
    LeftCommand,
    MoveCommand,
    PlaceCommand,
    ReportCommand,
    RightCommand
};