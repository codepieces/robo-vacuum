# robo-vacuum

Vacuum robot simulation exercise

## Usage

- Download zip and extract or clone this repo.
- The program can be run in interactive mode where each command is entered through stdin or batch mode where the file containing commands is specified as command line parameter.
- To run in interactive mode:
    - From top level folder, type `npm start`.
    - After you see the prompt '> ', you can enter the commands as specified in the Commands section below.
    - To quit, press Ctrl-C.
- To run in batch mode:
    - Create file containing commands to execute. Refer to testcommandfile for example of a command file.
    - From top level folder, type `npm start [filename]`.

## Commands

- LEFT - rotates robot 90 degrees counterclockwise to change the direction it's facing. Robot must've been placed in the room using PLACE command, otherwise it's a NOOP.
- MOVE - moves forward one unit in the direction it's currently facing. Robot must've been placed in the room using PLACE command, otherwise it's a NOOP. Issuing MOVE command when robot is at the edge of the room is also a NOOP.
- PLACE x,y,f - places robot in the room's x and y coordinates and direction it's facing (NORTH, EAST, SOUTH, WEST). Specifying x and y coordinates outside the room is a NOOP.
- REPORT - reports current position in the room and the direction it's facing.
- RIGHT - rotates robot 90 degrees clockwise to change the direction it's facing. Robot must've been placed in the room, otherwise it's a NOOP.

## System Requirements

- Nodejs v8.10.0 or later.