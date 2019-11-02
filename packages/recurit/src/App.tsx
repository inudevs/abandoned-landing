import React from 'react';
import Normalize from 'react-normalize';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';

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
            </Switch>
          </ContentWrap>
        </AppContainer>
      </Router>
    </>
  );
}
