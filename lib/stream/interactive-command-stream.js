const CommandStream = require('./command-stream');

class InteractiveCommandStream extends CommandStream {
    constructor() {
        super({
            input: process.stdin,
            output: process.stdout,
            prompt: '> '
        });
    }
}

module.exports = InteractiveCommandStream;