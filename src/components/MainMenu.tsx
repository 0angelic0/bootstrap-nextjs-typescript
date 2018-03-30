import * as React from 'react';
import { Menu, Sidebar, Container, Image, Button, Label } from 'semantic-ui-react';

interface MainMenuProps {
  role: string;
  page: string;
  onPageChange: (page: string) => void;
  onLogout: (e: React.SyntheticEvent<any>) => void;
}

interface MainMenuState {
  activeItem: string;
}

export default class MainMenu extends React.Component<MainMenuProps, MainMenuState> {

  constructor(props: any) {
    super(props);
    this.state = {
      activeItem: ''
    }
  }

  handleMenuItemClick = (event: any, {name}: any) => {
    this.props.onPageChange(name);
  }

  render() {
    const activeItem = this.props.page;
    return (
      <Sidebar as={Menu} animation='push' direction='top' visible={true} inverted>
      <Container>
        <Menu.Item header>
          Backoffice
          <Label color="green"> Server Online </Label>
        </Menu.Item>

        <Menu.Item name='news' color='red' 
          active={activeItem === 'news'} 
          onClick={this.handleMenuItemClick}>
          ข่าวสาร
        </Menu.Item>
        {this.props.role === 'admin' && <Menu.Item name='dashboard' color='red'
          active={activeItem === 'dashboard'} 
          onClick={this.handleMenuItemClick}>
          ข้อมูลเกม
        </Menu.Item>}
        
        <Menu.Item position='right'>
          <Button color='red' onClick={this.props.onLogout}>Logout</Button>
        </Menu.Item>
      </Container>
      </Sidebar>
    );
  }
}