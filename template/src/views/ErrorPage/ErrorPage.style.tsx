import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 70%;
  height: 70%;
`;

export const ErrorImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const Back = styled.button`
  font-size: 14px;
  color: #ffffff;
  margin-top: 36px;
  padding: 20px;
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
