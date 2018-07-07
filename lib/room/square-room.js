class SquareRoom {
    constructor(len) {
        this._len = len;
    }

    isAtBottomEdge({y}) {
        return y <= 0;
    }

    isAtLeftEdge({x}) {
        return x <= 0;
    }

    isAtRightEdge({x}) {
        return x >= this._len;
    }

    isAtTopEdge({y}) {
        return y >= this._len;
    }

    isInside({x, y}) {
        return x >= 0 && x <= this._len && y >= 0 && y <= this._len;
    }
}

module.exports = SquareRoom;