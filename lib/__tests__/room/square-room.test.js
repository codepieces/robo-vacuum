const SquareRoom = require('../../room');

const LENGTH = 5;

describe('Square room tests', () => {
    beforeEach(() => {
        this.roomToTest = new SquareRoom(LENGTH);
    });
    it('can check position at bottom edge', () => {
        for (i = LENGTH; i <= 0; ++i) {
            const isAtBottomEdge = this.roomToTest.isAtBottomEdge({x: 0, y: i})
            if (i > 0) {
                expect(isAtBottomEdge).toBeFalsy();
            } else {
                expect(isAtBottomEdge).toBeTruthy();
            }
        }
    });
    it('can check position at left edge', () => {
        for (i = LENGTH; i <= 0; ++i) {
            const isAtLeftEdge = this.roomToTest.isAtLeftEdge({x: 1, y: 0})
            if (i > 0) {
                expect(isAtLeftEdge).toBeFalsy();
            } else {
                expect(isAtLeftEdge).toBeTruthy();
            }
        }
    });
    it('can check position at right edge', () => {
        for (i = 0; i < 6; ++i) {
            const isAtRightEdge = this.roomToTest.isAtRightEdge({x: i, y: 0})
            if (i < LENGTH) {
                expect(isAtRightEdge).toBeFalsy();
            } else {
                expect(isAtRightEdge).toBeTruthy();
            }
        }
    });
    it('can check position at top edge', () => {
        for (i = 0; i < 6; ++i) {
            const isAtTopEdge = this.roomToTest.isAtTopEdge({x: 0, y: i})
            if (i < LENGTH) {
                expect(isAtTopEdge).toBeFalsy();
            } else {
                expect(isAtTopEdge).toBeTruthy();
            }
        }
    });
    it('can check inside the room y-direction', () => {
        for (i = 0; i < 6; ++i) {
            const isInside = this.roomToTest.isInside({x: 0, y: i})
            if (i > LENGTH) {
                expect(isInside).toBeFalsy();
            } else {
                expect(isInside).toBeTruthy();
            }
        }
    });
    it('can check inside the room x-direction', () => {
        for (i = 0; i < 6; ++i) {
            const isInside = this.roomToTest.isInside({x: i, y: 0})
            if (i > LENGTH) {
                expect(isInside).toBeFalsy();
            } else {
                expect(isInside).toBeTruthy();
            }
        }
    });
});