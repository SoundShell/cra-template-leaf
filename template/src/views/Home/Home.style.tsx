import styled, { keyframes } from 'styled-components/macro';
import { ThemeValue } from '../../themes';

export interface ThemeValueProps {
  themeValue: ThemeValue;
}

const appLogoFloat = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 500px;
  margin-bottom: 10px;
`;

export const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${appLogoFloat} infinite 3s ease-in-out;
  }
`;

export const WelcomeMessage = styled.span`
  font-size: 24px;
  color: ${(props) => props.theme.color6};
  padding: 24px;
`;

export const ThemeList = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const ThemeItem = styled.button<ThemeValueProps>`
  font-size: 14px;
  color: #ffffff;
  padding: 20px;
  background-color: ${(props) => props.themeValue.color6};
  &:hover {
    background-color: ${(props) => props.themeValue.color5};
  }
  &:active {
    background-color: ${(props) => props.themeValue.color7};
  }
`;

export const LocalList = styled(ThemeList)`
  justify-content: space-between;
`;

export const LocalItem = styled.button`
  font-size: 14px;
  color: #ffffff;
  padding: 10px;
  background-color: ${(props) => props.theme.color6};
  width: 230px;
  user-select: node;
  &:hover {
    background-color: ${(props) => props.theme.color5};
  }
  &:active {
    background-color: ${(props) => props.theme.color7};
  }
`;

export const LinkList = styled(LocalList)`
  a {
    color: ${(props) => props.theme.color6};
    &:hover {
      color: ${(props) => props.theme.color5};
    }
    &:active {
      color: ${(props) => props.theme.color7};
    }
  }
`;

export const TipMessage = styled.p`
  color: ${(props) => props.theme.color6};
  margin: 16px 0;
`;
