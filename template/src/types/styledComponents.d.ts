// import original module declarations
import 'styled-components';
import { ThemeItem as ThemeItemType } from '../themes';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeItemType {}
}
