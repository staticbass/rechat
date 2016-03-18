
'use strict';

const socketio = require('socket.io');

module.exports = {

  _setSync() {
    let storage = this.storage;
    this._emitConnected(storage);

    this.socket.on('send', message => {
      storage.push(message);
      this._emitMessages(storage);
    });
  },

  _setAsync() {
    this.getMessages(this._emitConnected.bind(this));
    this.socket.on('send', message => {
      this.onMessageAdd(message, this._emitMessages.bind(this))
    });
  },

  // emit message callback, fired when server recivies message
  _emitMessages(messages) {
    if(!Array.isArray(messages)) throw new Error('You should pass Array to done callback');
    this.io.sockets.emit('messages', { messages });
  },

  // emit connected callback, fired when client connects
  _emitConnected(messages) {
    if(!Array.isArray(messages)) throw new Error('You should pass Array to done callback');
    this.socket.emit('connected', { messages });
  },

  connect(server, options) {

    this.storage = options.storage;
    this.getMessages = options.getMessages;
    this.onMessageAdd = options.onMessageAdd;
    this.io = socketio(server);

    const isAsync = !this.storage;

    if(isAsync) {
      if(!this.getMessages) throw new Error('Type of getMessages options property should be "function"');
      if(!this.onMessageAdd) throw new Error('Type of onMessageAdd options property should be "function"');
    }

    this.io.on('connection', socket => {
      this.socket = socket;
      isAsync ? this._setAsync() : this._setSync();
    });
  }

}
