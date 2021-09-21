import calendulaGold from './calendulaGold';
import cyan from './cyan';
import daybreakBlue from './daybreakBlue';
import dustRed from './dustRed';
import geekBlue from './geekBlue';
import goldenPurple from './goldenPurple';
import lime from './lime';
import magenta from './magenta';
import polarGreen from './polarGreen';
import sunriseYellow from './sunriseYellow';
import sunsetOrange from './sunsetOrange';
import volcano from './volcano';

export type ThemeItem = Record<keyof typeof daybreakBlue, string>;

export interface Theme {
  [prop: string]: ThemeItem;
}

const theme: Theme = {
  calendulaGold,
  cyan,
  daybreakBlue,
  dustRed,
  geekBlue,
  goldenPurple,
  lime,
  magenta,
  polarGreen,
  sunriseYellow,
  sunsetOrange,
  volcano,
};

export default theme;
