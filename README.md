# Rechat

React socket chat demo

### Install

```sh
$ npm i -S react react-dom socket.io react-bootstrap rechat
```

###Example

**Client-side**
```javascript
// chat_client.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Chat } from 'rechat/client';

ReactDOM.render(<Chat url='http://localhost:5000'/>, document.querySelector('#app'))
```

**Server-side** <br>
```javascript
// chat_server.js
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
        done(messages); //excepts updated array of messages
      });
    }
  }

  // first argument is node http.Server instance
  chat.connect(server, options_sync /*or options_async*/);


```
