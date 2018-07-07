const BasicMovementStrategy = require('../../../robo/strategies/');
const {Facing} = require('../../../constants');
const SquareRoom = require('../../../room/square-room');

const ROOM_LENGTH = 5;
const ROOM = new SquareRoom(ROOM_LENGTH);

describe('basic movement strategy tests', () => {
    beforeEach(() => {
        this.movementStrategy = new BasicMovementStrategy();
    });
    it('can move forward when facing north', () => {
        const position = this.movementStrategy.moveForward({room: ROOM, position: {x: 0, y: 0, f: Facing.North}});
        expect(position).toEqual({x: 0, y: 1, f: Facing.North});
    });
    it('can move forward when facing east', () => {
        const position = this.movementStrategy.moveForward({room: ROOM, position: {x: 0, y: 0, f: Facing.East}});
        expect(position).toEqual({x: 1, y: 0, f: Facing.East});
    });
    it('can move forward when facing south', () => {
        const position = this.movementStrategy.moveForward({room: ROOM, position: {x: 0, y: 1, f: Facing.South}});
        expect(position).toEqual({x: 0, y: 0, f: Facing.South});
    });
    it('can move forward when facing west', () => {
        const position = this.movementStrategy.moveForward({room: ROOM, position: {x: 1, y: 0, f: Facing.West}});
        expect(position).toEqual({x: 0, y: 0, f: Facing.West});
    });
    it('cannot move forward when at the top edge of the room', () => {
        const position = this.movementStrategy.moveForward({room: ROOM, position: {x: 0, y: ROOM_LENGTH, f: Facing.North}});
        expect(position).toEqual({x: 0, y: ROOM_LENGTH, f: Facing.North});
    });
    it('cannot move forward when at the bottom edge of the room', () => {
        const position = this.movementStrategy.moveForward({room: ROOM, position: {x: 0, y: 0, f: Facing.South}});
        expect(position).toEqual({x: 0, y: 0, f: Facing.South});
    });
    it('cannot move forward when at the right edge of the room', () => {
        const position = this.movementStrategy.moveForward({room: ROOM, position: {x: ROOM_LENGTH, y: 0, f: Facing.East}});
        expect(position).toEqual({x: ROOM_LENGTH, y: 0, f: Facing.East});
    });
    it('cannot move forward when at the left edge of the room', () => {
        const position = this.movementStrategy.moveForward({room: ROOM, position: {x: 0, y: 0, f: Facing.West}});
        expect(position).toEqual({x: 0, y: 0, f: Facing.West});
    });
    it('can rotate right', () => {
        const expected = [Facing.North, Facing.East, Facing.South, Facing.West, Facing.North];
        expected.slice(0, expected.length - 1).forEach((x, i) => {
            const position = this.movementStrategy.turnRight({position: {x: 0, y: 0, f: x}});
            expect(position).toEqual({x: 0, y: 0, f: expected[i + 1]});
        });
    });
    it('can rotate left', () => {
        const expected = [Facing.North, Facing.West, Facing.South, Facing.East, Facing.North];
        expected.slice(0, expected.length - 1).forEach((x, i) => {
            const position = this.movementStrategy.turnLeft({position: {x: 0, y: 0, f: x}});
            expect(position).toEqual({x: 0, y: 0, f: expected[i + 1]});
        });
    });
});