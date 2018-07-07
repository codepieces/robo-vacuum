const BatchCommandStream = require('./batch-command-stream');
const InteractiveCommandStream = require('./interactive-command-stream');

function createStream() {
    const {argv} = process;
    if (argv.length === 3) {
        return new BatchCommandStream(argv[2]);
    } else if (argv.length === 2) {
        return new InteractiveCommandStream();
    } else {
        console.log('usage: node index.js [commandfile]');
        return null;
    }
}

module.exports = createStream;