const {Facing} = require('../../constants');
const createCommand = require('../../commands');
const {
    InvalidCommand,
    LeftCommand,
    MoveCommand, 
    PlaceCommand,
    ReportCommand,
    RightCommand
} = require('../../commands/robo-commands');

describe('command factory tests', () => {
    it('can create MOVE command', () => {
        expect(createCommand(' move ')).toEqual(new MoveCommand());
    });
    it('can create LEFT command', () => {
        expect(createCommand(' left ')).toEqual(new LeftCommand());
    });
    it('can create RIGHT command', () => {
        expect(createCommand(' right ')).toEqual(new RightCommand());
    });
    it('can create REPORT command', () => {
        expect(createCommand(' report ')).toEqual(new ReportCommand());
    });
    it('INVALID command created from invalid input', () => {
        expect(createCommand(' abc ')).toEqual(new InvalidCommand());
    });
    it('can create PLACE command', () => {
        expect(createCommand(' place  0,1,north ')).toEqual(new PlaceCommand(0, 1, Facing.North));
    });
    it('INVALID command created from invalid PLACE input', () => {
        expect(createCommand(' place 0 1 a ')).toEqual(new InvalidCommand());
    });
});