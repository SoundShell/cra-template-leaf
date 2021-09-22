import loadable from '@loadable/component';
import React, { useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ThemeProvider } from 'styled-components/macro';
import { Container } from './App.style';
import { RootState } from './app/store';
import { initAppState, selectApp } from './appSlice';
import GlobalStyle from './index.style';
import locale, { Locale } from './locales';
import theme, { ThemeValue } from './themes';

const Home = loadable(() => import('./views/Home'));
const ErrorPage = loadable(() => import('./views/ErrorPage'));

export interface AppStateEntity {
  projectNo: string;
  projectId: string | null;
  locale: Locale;
  auth: { token: string | null; permissions: string[] };
  theme: ThemeValue;
}

const App = () => {
  const dispatch = useDispatch();
  const status = useSelector((state: RootState) => state.app.status);
  const appState = useSelector(selectApp) as AppStateEntity;
  const appLocale = appState.locale ?? locale['en-US'];
  const appTheme = appState.theme ?? theme['daybreakBlue'];

  useEffect(() => {
    if (status === 'idle') {
      const projectId = localStorage.getItem('projectId');
      const token = localStorage.getItem('token');
      const state = {
        projectNo: 'LeafXbGVhZi14LXdlYi1jb25zb2xl',
        projectId,
        locale: appLocale,
        theme: theme['daybreakBlue'],
        auth: { token, permissions: [] },
      };

      dispatch(initAppState(state));
    }
  }, [status, appLocale, dispatch]);

  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyle />
      <IntlProvider locale={appLocale.language} messages={appLocale.messages}>
        <Container>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/error/:type' component={ErrorPage} exact />
            <Route component={ErrorPage} />
          </Switch>
        </Container>
      </IntlProvider>
    </ThemeProvider>
  );
};

export default App;
