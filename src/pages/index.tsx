import * as React from 'react';
import * as Cookies from 'js-cookie';
import * as config from '../config';
import Router from '../next/router';
import Main from '../components/Main';
import * as jwt_decode from 'jwt-decode';

class PageIndex extends React.Component<any, any> {
  
  constructor(props: any) {
    super(props)
  }

  static async getInitialProps(context: any) {
    const needRediect: boolean = this.redirectToAuthLoginIfNotLoggedIn(context);
    console.log('needRediect', needRediect);
    if (needRediect) return {};

    let role: string = '';
    if (context.req) {
      role = context.req.jwtPayload.role;
    } else {
      const token: any = Cookies.get(config.jwt.cookieName);
      const decoded: any = jwt_decode(token);
      role = decoded.role;
    }
    return {
      role: role
    };
  }

  static redirectToAuthLoginIfNotLoggedIn(context: any): boolean {
    let needRediect: boolean;
    if (context.req) needRediect = context.req.jwtPayload === undefined;
    else needRediect = Cookies.get(config.jwt.cookieName) === undefined;
    
    if (needRediect) {
      Router.push({
        pathname: config.path.login
      });
    }

    return needRediect;
  }

  logout() {
    Cookies.remove(config.jwt.cookieName);
    Router.push({
      pathname: config.path.login
    });
  }

  handleLogout = (event: React.SyntheticEvent<any>) => {
    this.logout();
  }

  render() {
    return <Main onLogout={this.handleLogout} role={this.props.role}/>;
  }
}

export default PageIndex;