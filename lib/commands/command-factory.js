const {CommandType, FacingOrder} = require('../constants');
const {
    InvalidCommand,
    LeftCommand,
    MoveCommand, 
    PlaceCommand,
    ReportCommand,
    RightCommand
} = require('./robo-commands');

const INVALID_COMMAND = new InvalidCommand();
const INVALID_COMMAND_FACTORY = () => INVALID_COMMAND;
const COMMAND_FACTORY = (predicate, cmdParamFactoryFunc, cmdFactoryFunc, tokens) => 
    predicate(tokens) ? cmdFactoryFunc(cmdParamFactoryFunc(tokens)) : INVALID_COMMAND;
const TOKEN_LENGTH_MUST_EQUAL = (tokenLength, tokens) => tokens.length === tokenLength;
const NO_PARAM_COMMAND_FACTORY = COMMAND_FACTORY.bind(null, TOKEN_LENGTH_MUST_EQUAL.bind(null, 1), () => null);
const PLACE_COMMAND_PARAM_FACTORY_FUNC = tokens => {
    const paramTokens = tokens[1].split(',').filter(x => x.trim().length > 0);
    if (paramTokens.length == 3) {
        const [x, y] = paramTokens.slice(0, 2).map(x => Number.parseInt(x.trim()));
        const f = paramTokens[2].trim();
        if (!Number.isNaN(x) && !Number.isNaN(y) && FacingOrder.includes(f)) {
            return {x, y, f};
        }
    }
    return null;
};
const PLACE_COMMAND_FACTORY_FUNC = params => params ? new PlaceCommand(params.x, params.y, params.f) : INVALID_COMMAND;
const PLACE_COMMAND_FACTORY = COMMAND_FACTORY.bind(
    null,
    TOKEN_LENGTH_MUST_EQUAL.bind(null, 2),
    PLACE_COMMAND_PARAM_FACTORY_FUNC,    
    PLACE_COMMAND_FACTORY_FUNC
);
const COMMANDTYPE_TO_FACTORY_MAPPING = {
    [CommandType.Left]: NO_PARAM_COMMAND_FACTORY.bind(null, () => new LeftCommand()),
    [CommandType.Move]: NO_PARAM_COMMAND_FACTORY.bind(null, () => new MoveCommand()),
    [CommandType.Report]: NO_PARAM_COMMAND_FACTORY.bind(null, () => new ReportCommand()),
    [CommandType.Right]: NO_PARAM_COMMAND_FACTORY.bind(null, () => new RightCommand()),
    [CommandType.Place]: PLACE_COMMAND_FACTORY
};

function createCommand(cmdStr) {
    if (typeof cmdStr === 'string' && cmdStr.trim().length > 0) {
        const cmdTokens = cmdStr.trim().toLowerCase().split(' ').filter(x => x.trim().length > 0);
        return (COMMANDTYPE_TO_FACTORY_MAPPING[cmdTokens[0]] || INVALID_COMMAND_FACTORY)(cmdTokens);
    }
    return INVALID_COMMAND;
}

module.exports = createCommand;