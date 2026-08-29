//Doubt

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Register event handler
myEmitter.on('event', () => {
    console.log('Event triggered!');
});

// Emit event
myEmitter.emit('event');