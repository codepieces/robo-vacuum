const fs = require('fs');
const CommandStream = require('./command-stream');

class BatchCommandStream extends CommandStream {
    constructor(filename) {
        super({input: fs.createReadStream(filename)});
    }
}

module.exports = BatchCommandStream;