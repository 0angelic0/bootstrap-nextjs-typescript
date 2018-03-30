import * as React from 'react';
import { Container } from 'semantic-ui-react';
import CustomHead from '../components/CustomHead';
import MainMenu from '../components/MainMenu';

const NewsSection = () => {
  return <Container>
            <h1>NewsSection</h1>
          </Container>
}
const DashboardSection = () => {
  return <Container>
            <h1>DashboardSection</h1>
          </Container>
}

interface MainProps {
  role: string;
  onLogout: (e: React.SyntheticEvent<any>) => void;
}
interface MainState {
  page: string;
}
class Main extends React.Component<MainProps, MainState> {
  
  constructor(props: any) {
    super(props)
    let page: string = 'news';
    this.state = {
      page
    }
  }

  handlePageChange = (page: string) => {
    this.setState({
      page
    });
  }

  render() {
    return (
      <div>
        <CustomHead />
        <MainMenu role={this.props.role}
          page={this.state.page} 
          onPageChange={this.handlePageChange} 
          onLogout={this.props.onLogout}/>
        <Container style={{marginTop: '5em' }}>
          {this.state.page === 'news' && <NewsSection/>}
          {this.state.page === 'dashboard' && <DashboardSection/>}
        </Container>
      </div>
    )
  }
}

export default Main;