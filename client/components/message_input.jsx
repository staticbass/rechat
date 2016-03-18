
import React from 'react';

class MessageInput extends React.Component {

  constructor(props) {
    super(props);
    this.onSend = this.onSend.bind(this);
  }

  onSend(e) {
    e.preventDefault();
    const text = this.refs.input.value.trim();
    if(text) {
      this.props.send(text);
      this.refs.input.value = '';
    }
  }

  render() {
    return (
      <div className='panel-footer'>
        <form onSubmit={this.onSend}>
          <div className="input-group">
            <input ref='input' type="text" className="form-control" placeholder="Type your message..." />
            <span className="input-group-btn">
              <button
                type='submit'
                disabled={this.props.disabled}
                className="btn btn-default" type="button">Send!</button>
            </span>
          </div>
        </form>
      </div>
    )
  }

}

MessageInput.propTypes = {
  send: React.PropTypes.func.isRequired
}

export default MessageInput;
