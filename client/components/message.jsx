
import React from 'react';

class Message extends React.Component {

  render() {
    const messageClass = this.props.username == this.props.user ? 'alert-warning own message' : 'alert-info message';
    return (
      <li className='clearfix' key={this.props.key}>
        <div className={`alert ${messageClass}`}>
          <strong>{this.props.user}:</strong> {this.props.text}
        </div>
      </li>
    )
  }

}

export default Message;
