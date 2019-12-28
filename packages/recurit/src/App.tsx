import React from 'react';
import Normalize from 'react-normalize';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import styled from 'styled-components';

import Navbar from './components/Navbar';

import {
  About,
  Course,
  Home,
  JobDeveloper,
} from './pages';

const AppContainer = styled.div`
  display: flex;
  height: auto;
  min-height: 100vh;
`;

const ContentWrap = styled.div`
  display: flex;
  flex: 1 1;
  width: calc(100% - 13.5rem);
`;

const App: React.FC = () => {
  return (
    <>
      <Normalize />
      <Router>
        <AppContainer>
          <Navbar />
          <ContentWrap>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/course" component={Course} />
              <Route path="/jobs/developer" component={JobDeveloper} />
            </Switch>
          </ContentWrap>
        </AppContainer>
      </Router>
    </>
  );
};

export default App;
