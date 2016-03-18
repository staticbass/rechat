
import React from 'react';

import MenuBar from './menu_bar.jsx';
import MessagesContainer from './messages_container.jsx';
import MessageInput from './message_input.jsx';

class ChatWindow extends React.Component {

  render() {
    const visibilityClass = this.props.visible ? '' : 'hide';
    return (
      <div className={`chat-window-component ${visibilityClass}`}>
        <div className='panel panel-primary'>
          <MenuBar logout={this.props.logout} />
          <MessagesContainer username={this.props.username} messages={this.props.messages} />
          <MessageInput disabled={!this.props.connected} send={this.props.sendMessage} />
        </div>
      </div>
    )
  }

}

ChatWindow.propTypes = {
  messages: React.PropTypes.array.isRequired,
  sendMessage: React.PropTypes.func.isRequired
}

export default ChatWindow;
