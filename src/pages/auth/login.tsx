import * as React from 'react';
import { Button, Form, Grid, Header, Image, Segment, Message } from 'semantic-ui-react';
import axios from 'axios'
import Router from '../../next/router';
import CustomHead from '../../components/CustomHead';
import * as Cookies from 'js-cookie';
import * as config from '../../config';

interface PageLoginState {
  username: string;
  password: string;
  errorMessage: string;
}

class PageLogin extends React.Component<any, PageLoginState> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorMessage: ''
    }
  }

  componentWillMount() {
    this.redirectToHomeIfAlreadyLoggedIn();
  }

  redirectToHomeIfAlreadyLoggedIn() {
    if (Cookies.get(config.jwt.cookieName) != undefined) {
      Router.push({
        pathname: config.path.home
      });
    }
  }

  async login({username, password}: any) {
    try {
      const res = await axios.post(window.location.origin + '/api/auth', {username, password})
      if (res.data.success) {
        Cookies.set(config.jwt.cookieName, res.data.token)
        Router.push({
          pathname: config.path.home
        })
      }
    } catch (error) {
      this.setState({
        errorMessage: error.response.data.message
      })
    }
  }

  handleSubmit = (event: any) => {
    const { username, password } = this.state
    if (!username || !password) {
      this.setState({
        errorMessage: 'Please enter both Username and Password.'
      });
    }
    else {
      this.setState({
        errorMessage: ''
      });
      this.login(this.state);
    }
  }

  handleChangeUsername = (event: any) => {
    this.setState({
      username: event.currentTarget.value
    });
  }

  handleChangePassword = (event: any) => {
    this.setState({
      password: event.currentTarget.value
    });
  }

  render() {
    return (
      <div className='login-form' style={{ height: '100vh' }}>
        <CustomHead />
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='red' textAlign='center'>
              {' '}Log-in to your account
            </Header>
            <Form size='large'>
              <Segment>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='Username'
                  onChange={this.handleChangeUsername}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  onChange={this.handleChangePassword}
                />

                <Button color='red' fluid size='large' onClick={this.handleSubmit}>Login</Button>
              </Segment>
            </Form>
            {this.state.errorMessage && <Message error>{this.state.errorMessage}</Message>}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default PageLogin;