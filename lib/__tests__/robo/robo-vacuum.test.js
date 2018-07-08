const {Facing} = require('../../constants');
const RoboVacuum = require('../../robo/robo-vacuum');
const SquareRoom = require('../../room');
const {
    LeftCommand,
    MoveCommand, 
    PlaceCommand,
    RightCommand
} = require('../../commands/robo-commands');

const ROOM = new SquareRoom(5);

describe('Robo vacuum tests', () => {
    beforeEach(() => {
        this.moveForwardMock = jest.fn();
        this.turnLeftMock = jest.fn();
        this.turnRightMock = jest.fn();
        this.robo = new RoboVacuum(ROOM, {
            moveForward: this.moveForwardMock,
            turnLeft: this.turnLeftMock,
            turnRight: this.turnRightMock
        });
    });
    it('can process move command', () => {
        this.robo.processCommand(new MoveCommand());
        expect(this.moveForwardMock).toBeCalled();
    });
    it('can process turn left command', () => {
        this.robo.processCommand(new LeftCommand());
        expect(this.turnLeftMock).toBeCalled();
    });
    it('can process turn right command', () => {
        this.robo.processCommand(new RightCommand());
        expect(this.turnRightMock).toBeCalled();
    });
    it('can place robot inside the room', () => {
        this.robo.processCommand(new PlaceCommand(0, 0, Facing.North));
        expect(this.robo.position).toEqual({x: 0, y: 0, f: Facing.North});
    });
    it('cannot place robot outside the room', () => {
        this.robo.processCommand(new PlaceCommand(0, 6, Facing.North));
        expect(this.robo.position).toBeUndefined();
    });
});