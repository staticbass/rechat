
import React from 'react';

class LoginBlock extends React.Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login() {
    const username = this.refs.input.value.trim();
    if(username) {
      this.refs.input.value = '';
      this.props.login(username);
    }
  }

  render() {
    const visibilityClass = this.props.visible ? 'hide' : '';
    return (
      <div className={`login-block-component ${visibilityClass}`}>
        <div className='panel panel-default'>
          <div className='panel-heading'>

            <strong>Sign in to continue</strong>

          </div>
          <div className='panel-body'>

            <div className='col-md-8 col-md-offset-2'>
              <div className="form-group">
                <label>Username</label>
                <input ref='input' type="text" className="form-control" autofocus />
              </div>
            </div>

          </div>
          <div className='panel-footer clearfix'>

            <button onClick={this.login} className='btn btn-success btn-sm pull-right'>Ok</button>

          </div>
        </div>

      </div>
    )
  }

}

LoginBlock.propTypes = {
  login: React.PropTypes.func.isRequired
}

export default LoginBlock;
