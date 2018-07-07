const createStream = require('../../stream');
const InteractiveCommandStream = require('../../stream/interactive-command-stream')
const BatchCommandStream = require('../../stream/batch-command-stream');

describe('stream factory tests', () => {
    it('can create interactive command stream', () => {
        const stream = createStream();
        expect(stream instanceof InteractiveCommandStream).toBeTruthy();
    });
    it('can create interactive command stream', () => {
        process.argv = ['test', 'test', 'testcommandfile'];
        const stream = createStream();
        expect(stream instanceof BatchCommandStream).toBeTruthy();
    });
});