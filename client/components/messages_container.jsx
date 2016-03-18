
import React from 'react';
import Message from './message.jsx';

class MessagesContainer extends React.Component {

  render() {
    const messages = this.props.messages.map((m, i) => {
      return <Message username={this.props.username} key={i} user={m.user} text={m.text} />
    });
    return (
      <div className='panel-body messages-container'>
        <ul>
          {messages}
        </ul>
      </div>
    )
  }

}

export default MessagesContainer;
