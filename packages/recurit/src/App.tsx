import React from 'react';
import Normalize from 'react-normalize';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import Navbar from './components/templates/Navbar';

import {
  About,
  Course,
  Home,
  JobDeveloper,
} from './pages';

import { useTheme } from './utils/useTheme';

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
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <Normalize />
      <Router>
        <AppContainer>
          <Navbar
            onClickToggleTheme={toggleTheme}
          />
          <ThemeProvider
            theme={{ mode: theme }}
          >
            <ContentWrap>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/course" component={Course} />
                <Route path="/jobs/developer" component={JobDeveloper} />
              </Switch>
            </ContentWrap>
          </ThemeProvider>
        </AppContainer>
      </Router>
    </>
  );
};

export default App;
