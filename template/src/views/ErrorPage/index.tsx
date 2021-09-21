import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { RouteComponentProps } from 'react-router';
import NotAuth from '../../assets/401.svg';
import NotPermission from '../../assets/403.svg';
import NotFound from '../../assets/404.svg';
import Collapse from '../../assets/500.svg';
import Browser from '../../assets/browser.svg';
import history from '../../history';
import { Back, Container, ErrorImg } from './ErrorPage.style';

type ErrorType = '403' | '500' | '401' | 'browser';

interface ErrorPageProps
  extends RouteComponentProps<{
    type: ErrorType;
  }> {}

const Error = ({ match }: ErrorPageProps) => {
  const [state] = useState({
    '401': NotAuth,
    '404': NotFound,
    '403': NotPermission,
    '500': Collapse,
    browser: Browser,
  });

  const url = state[`${match.params.type ?? 404}`];

  return (
    <Container>
      <ErrorImg src={url ?? NotFound} alt='ErrorImg' />
      <Back onClick={() => history.push('/')}>
        <FormattedMessage id='errorPage.back' />
      </Back>
    </Container>
  );
};

export default Error;
