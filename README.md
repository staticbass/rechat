# Rechat

React socket chat demo

### Install

```sh
$ npm i -S rechat
```
Rechat requires [react](https://github.com/facebook/react), [react-dom](https://github.com/facebook/react/tree/master/packages/react-dom), [socket.io](https://github.com/socketio/socket.io) and [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap) as ``peerDependency``.

###Example

####Client-side
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Chat } from 'rechat/client';

ReactDOM.render(<Chat url='http://localhost:5000'/>, document.querySelector('#app'))
```

####Server-side
Usage with [node.js](https://nodejs.org/)
```javascript
var http = require('http');
var chat = require('rechat/server');
var server = http.createServer(function(req, res) {
  // your request handler ...
});

var options = {
  storage: [] 
};

chat.connect(server, options);

server.listen(5000);
```

Usage with [express.js](http://expressjs.com/) framework
```javascript
var express = require('express');
var http = require('http');
var chat = require('rechat/server');

var app = express();
var server = htpp.createServer(app);

var options = {
  storage: [] // you have to pass array for storing messages
};

chat.connect(server, options)

server.listen(5000);
```

#### Async api

Method ``connect`` can also take ``getMessages`` and ``onMessageAdd`` callbacks for async flow. For example, you can use it when you whant to store messages in database.

```javascript
chat.connect(server, {
  getMessages: function(done) {
    db.get('messages', function(err, messages) {
      if(err) throw err;
      done(messages);
    });
  },
  onMessageAdd: function(message, done) {
    db.add(message, function(err, messages) {
      if(err) throw err;
      done(messages); // updated array
    });
  }
});
```

When you use async api ``storage`` property is ignored. Note that you always have to pass an array of messages to ``done`` callbacks.

