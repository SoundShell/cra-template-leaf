import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { setAppLocale, setAppTheme } from '../../appSlice';
import logo from '../../assets/logo.svg';
import Counter from '../../features/counter/Counter';
import locale from '../../locales';
import theme from '../../themes';
import {
  Container,
  LinkList,
  LocalItem,
  LocalList,
  Logo,
  ThemeItem,
  ThemeList,
  TipMessage,
  WelcomeMessage,
} from './Home.style';

const Home = () => {
  const [state] = useState({ theme, locale });
  const dispatch = useAppDispatch();

  return (
    <Container>
      <Logo src={logo} />
      <WelcomeMessage>
        <FormattedMessage id='home.message' />
      </WelcomeMessage>
      <TipMessage>
        <FormattedMessage id='home.themeMessage' />
      </TipMessage>
      <ThemeList>
        {Object.entries(state.theme).map(([key, value]) => (
          <ThemeItem
            key={key}
            themeValue={value}
            onClick={() => dispatch(setAppTheme(value))}
          />
        ))}
      </ThemeList>
      <TipMessage>
        <FormattedMessage id='home.localeMessage' />
      </TipMessage>
      <LocalList>
        {Object.entries(state.locale).map(([key, value]) => (
          <LocalItem key={key} onClick={() => dispatch(setAppLocale(value))}>
            {key === 'zh-CN' ? '中文' : 'English'}
          </LocalItem>
        ))}
      </LocalList>
      <TipMessage>
        <FormattedMessage id='home.routerMessage' />
      </TipMessage>
      <LinkList>
        <Link to='/error/401'>401</Link>
        <Link to='/error/403'>403</Link>
        <Link to='/error/404'>404</Link>
        <Link to='/error/500'>500</Link>
      </LinkList>
      <TipMessage>
        <FormattedMessage id='home.counterMessage' />
      </TipMessage>
      <Counter />
    </Container>
  );
};

export default Home;
