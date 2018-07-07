const readline = require('readline');
const stream = require('stream');
const createCommand = require('../commands');

class CommandStream extends stream.Readable {
    constructor(config) {
        super({objectMode: true});
        if (config) {
            const {input = null, output = null, prompt = null} = config;
            this.readlineConfig = {};
            if (input) {
                this.readlineConfig.input = input;
            }
            if (output) {
                this.readlineConfig.output = output;
            }
            if (prompt) {
                this.readlineConfig.prompt = prompt;
            }
        }
        this._processLine = this._processLine.bind(this);
    }

    _processLine(line) {
        const command = createCommand(line);
        let isBufferFull = false;
        if (command.isValidCommand()) {
            isBufferFull = !this.push(command);
        } else {
            console.log(`Invalid Command: ${line}`);
        }
        if (isBufferFull) {
            console.log('Not accepting any more command as buffer is full!')
        } else {
            this.rl.prompt();
        }
    }

    _read(size) {
        if (!this.rl) {
            this.rl = readline.createInterface(this.readlineConfig);
            this.rl.on('line', this._processLine);
        }
        this.rl.prompt();
    }
}

module.exports = CommandStream;