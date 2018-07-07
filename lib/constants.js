const CommandType = {
    Invalid: 'invalid',
    Left: 'left',
    Move: 'move',
    Place: 'place',
    Report: 'report',
    Right: 'right'
};

const Facing = {
    East: 'east',    
    North: 'north',
    South: 'south',
    West: 'west'
};

const FacingOrder = [Facing.North, Facing.East, Facing.South, Facing.West];

module.exports = {CommandType, Facing, FacingOrder};