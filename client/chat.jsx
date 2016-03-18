
import React from 'react';
import io from 'socket.io-client';

import LoginBlock from './components/login_block.jsx';
import ChatWindow from './components/chat_window.jsx';

import './styles/main.scss';

export class Chat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: null,
      socket: null,
      messages: []
    }
    this.connect = this.connect.bind(this);
    this.login = this.login.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  connect() {
    const socket = io.connect(this.props.url);

    socket.on('connected', ({ messages }) => {
      this.setState({ messages });
    });

    socket.on('messages', ({ messages }) => {
      this.setState({ messages });
    });

    this.setState({ socket });
  }

  login(username) {
    this.setState({ username });
    this.connect();
  }

  logout() {
    socket.disconnect();
    this.setState({
      username: null,
      socket: null,
      messages: []
    });
  }

  sendMessage(text) {
    this.state.socket.emit('send', {user: this.state.username, text});
  }

  render() {
    const loggedIn = !!this.state.username;
    return (
      <div className='chat-component'>
        <ChatWindow
          sendMessage={this.sendMessage}
          messages={this.state.messages}
          logout={this.logout}
          visible={loggedIn}
          connected={!!this.state.socket}
          username={this.state.username} />
        <LoginBlock visible={loggedIn} login={this.login}/>
      </div>
    )
  }

}

Chat.propTypes = {
  url: React.PropTypes.string.isRequired,
  onConnected: React.PropTypes.func,
  onMessage: React.PropTypes.func,
  onDisconnected: React.PropTypes.func,
}
