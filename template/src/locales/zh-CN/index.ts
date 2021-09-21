import { Locale } from '..';
import counter from './counter';
import errorPage from './errorPage';
import home from './home';

const zhCN: Locale = {
  language: 'zh-CN',
  messages: { ...home, ...errorPage, ...counter },
};

export default zhCN;
