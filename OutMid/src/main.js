const Engine = require('./engine');
const Creator = require('./creator');
const Storage = require('./storage');

async function init() {
    console.log('Starting OutMid Browser...');
    await Engine.init();
    await Creator.init();
    await Storage.init();
}

init();
