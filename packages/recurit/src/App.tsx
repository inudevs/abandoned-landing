import React from 'react';
import Normalize from 'react-normalize';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import styled from 'styled-components';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import { JobDeveloper } from './pages/jobs';

const AppContainer = styled.div`
  display: flex;
  height: 100%;
`;

const ContentWrap = styled.div`
  display: flex;
  flex: 1 1;
`;

export default function App() {
  return (
    <>
      <Normalize />
      <Router>
        <AppContainer>
          <Navbar />
          <ContentWrap>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/jobs/developer" component={JobDeveloper} />
            </Switch>
          </ContentWrap>
        </AppContainer>
      </Router>
    </>
  );
}
