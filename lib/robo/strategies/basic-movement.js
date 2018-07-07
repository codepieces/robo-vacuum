const {Facing, FacingOrder} = require('../../constants');

class BasicMovementStrategy {
    constructor() {
        this.turnLeft = this._turn.bind(this, this._prevFacingFinder);
        this.turnRight = this._turn.bind(this, this._nextFacingFinder);
        this.moveForward = this.moveForward.bind(this);
        this._facingToMoveHandlerMapping = {
            [Facing.North]: this._moveNorth,
            [Facing.East]: this._moveEast,
            [Facing.South]: this._moveSouth,
            [Facing.West]: this._moveWest
        }
    }

    moveForward(params) {
        const {position, room} = params;
        this._isValidPosition(position);
        return (this._isValidPosition(position) &&  this._facingToMoveHandlerMapping[position.f] || this._noMovement)(room, position);
    }

    _moveEast(room, position) {
        if (!room.isAtRightEdge(position)) {
            return ({...position, x: ++position.x});
        }
        return position;
    }

    _moveNorth(room, position) {
        if (!room.isAtTopEdge(position)) {
            return ({...position, y: ++position.y});
        }
        return position;
    }

    _moveSouth(room, position) {
        if (!room.isAtBottomEdge(position)) {
            return ({...position, y: --position.y});
        }
        return position;
    }

    _moveWest(room, position) {
        if (!room.isAtLeftEdge(position)) {
            return ({...position, x: --position.x});
        }
        return position;
    }

    _noMovement(room, position) {
        return position;
    }

    _nextFacingFinder(f) {
        const idx = FacingOrder.indexOf(f);
        return FacingOrder[idx === FacingOrder.length - 1 ? 0 : idx + 1];
    }

    _prevFacingFinder(f) {
        const idx = FacingOrder.indexOf(f);
        return FacingOrder[idx === 0 ? FacingOrder.length - 1 : idx - 1];
    }

    _turn(fFinder, params) {
        const {position} = params;
        if (!this._isValidPosition(position)) {
            return position;
        }
        const {x, y, f} = position;
        return {
            x,
            y,
            f: fFinder(f)
        };
    }

    _isValidPosition(position) {
        return position
            && Number.isInteger(position.x)
            && Number.isInteger(position.y)
            && FacingOrder.includes(position.f);
    }
}

module.exports = BasicMovementStrategy;