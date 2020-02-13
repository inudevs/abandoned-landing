import media from 'css-in-js-media';
import React from 'react';
import Normalize from 'react-normalize';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

// import Navbar from './components/templates/Navbar';

import {
  About,
  Course,
  Home,
  Job,
  JobDeveloper,
} from './pages';

import useTheme from './utils/useTheme';

const App: React.FC = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <Normalize />
      <Router>
        <AppContainer>
          {/* <Navbar
            theme={theme}
            onToggleTheme={toggleTheme}
          /> */}
          <ThemeProvider
            theme={{ mode: theme }}
          >
            <ContentWrap>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/course" component={Course} />
                <Route exact path="/job" component={Job} />
                <Route path="/job/developer" component={JobDeveloper} />
              </Switch>
            </ContentWrap>
          </ThemeProvider>
        </AppContainer>
      </Router>
    </>
  );
};

export default App;

const AppContainer = styled.div`
  display: flex;
  height: auto;
  min-height: 100vh;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  flex: 1 1;
  width: calc(100% - 13.5rem);

  ${media('<=tablet')} {
    width: 100%;
  }
`;
