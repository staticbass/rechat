# Rechat

React socket chat demo

### Install

```sh
$ npm i -S rechat
```
Rechat requires [react](https://github.com/facebook/react), [react-dom](https://github.com/facebook/react/tree/master/packages/react-dom), [socket.io](https://github.com/socketio/socket.io) and [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap) as ``peerDependency``.

###Example

**Client-side**
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Chat } from 'rechat/client';

ReactDOM.render(<Chat url='http://localhost:5000'/>, document.querySelector('#app'))
```

**Server-side**
```javascript
  var chat = require('rechat/server');

  // synchronous api
  var options_sync = {
    storage: [] //  array to store messages
  }

  // asynchronous api
  var options_async = {
    getMessages: function(done) {
      db.find('messages', function(err, messages) {
        if(err) throw err;
        done(messages);
      });
    },
    onMessageAdd: function(message, done) {
      db.add(message, function(err, messages) {
        if(err) throw err;
        done(messages); //expects updated array of messages
      });
    }
  }

  // first argument (server) is node http.Server instance
  chat.connect(server, options_sync /* or options_async */);
```
