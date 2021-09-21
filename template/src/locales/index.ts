import enUS from './en-US';
import zhCN from './zh-CN';

export type Language = 'zh-CN' | 'en-US';

export interface Locale {
  language: Language;
  messages: {
    [prop: string]: string;
  };
}

const locale = { 'zh-CN': zhCN, 'en-US': enUS };

export default locale;
