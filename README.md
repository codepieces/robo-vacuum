# robo-vacuum

Vacuum robot simulation exercise

## Usage

```
npm start [commandfile]
```

## Commands

#### LEFT - rotates robot 90 degrees to the left to change the direction it's facing. Robot must be placed in the room, otherwise it's a NOOP.
#### MOVE - moves forward one unit in the direction it's currently facing. Robot must be placed in the room, otherwise it's a NOOP.
#### PLACE x,y,f - places robot in the room in the room x, y coordinate and direction it's facing (NORTH, EAST, SOUTH, WEST). Specifying x, y coordinates outside the room is a NOOP.
#### REPORT - reports current position in the room and direction it's facing.
#### RIGHT - rotates robot 90 degrees to the right to the change the direction it's facing. Robot must be placed in the room, otherwise it's a NOOP.