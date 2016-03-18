
import React from 'react';
import ReactBootstrap, { DropdownButton, MenuItem } from 'react-bootstrap';

class MenuBar extends React.Component {

  render() {
    return (
        <div className='panel-heading clearfix menu-bar-component'>
          <div className='panel-title'>
            <strong>Chat</strong>
            <DropdownButton id='menu' title=' ' bsStyle='primary' bsSize='xsmall'>
              <MenuItem onClick={this.props.logout}>
                <i className='glyphicon glyphicon-off'></i> Logout
              </MenuItem>
            </DropdownButton>
          </div>
        </div>
    )
  }

}

MenuBar.propTypes = {
  logout: React.PropTypes.func.isRequired
}

export default MenuBar;
