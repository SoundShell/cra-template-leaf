// import original module declarations
import 'styled-components';
import { ThemeValue } from '../themes';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeValue {}
}
