import { Locale } from '..';
import counter from './counter';
import errorPage from './errorPage';
import home from './home';

const enUS: Locale = {
  language: 'en-US',
  messages: { ...home, ...errorPage, ...counter },
};

export default enUS;
