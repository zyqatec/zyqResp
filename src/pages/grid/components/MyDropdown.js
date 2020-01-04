import React, { Component } from 'react';
import { Dropdown, Button,Menu ,Icon,message} from 'antd';
import '../components/style.css';


class MyDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

   handleButtonClick  = (e) => {
    message.info('Click on left button.');
    console.log('click left button', e);
  }

   handleMenuClick =(e)=> {
    message.info('Click on menu item.');
    console.log('click', e);
  }

render() {
  const menu = (
    <Menu onClick={this.handleMenuClick}>
      <Menu.Item key="1">
        <Icon type="user" />
        1st menu item
          </Menu.Item>
      <Menu.Item key="2">
        <Icon type="user" />
        2nd menu item
          </Menu.Item>
      <Menu.Item key="3">
        <Icon type="user" />
        3rd item
          </Menu.Item>
    </Menu>
  );
  return (
    <div id="components-dropdown-demo-dropdown-button">
      <Dropdown.Button onClick={this.handleButtonClick} overlay={menu}>
        Dropdown
    </Dropdown.Button>
      <Dropdown.Button overlay={menu} icon={<Icon type="user" />}>
        Dropdown
    </Dropdown.Button>
      <Dropdown.Button onClick={this.handleButtonClick} overlay={menu} disabled>
        Dropdown
    </Dropdown.Button>
      <Dropdown overlay={menu}>
        <Button>
          Button <Icon type="down" />
        </Button>
      </Dropdown>
    </div>
  );
}
}

export default MyDropdown;