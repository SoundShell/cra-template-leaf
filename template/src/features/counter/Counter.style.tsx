import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Value = styled.span`
  width: 40px;
  text-align: center;
  color: ${(props) => props.theme.color6};
`;

export const Button = styled.button`
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  background-color: ${(props) => props.theme.color6};
  width: 80px;
  user-select: node;
  &:hover {
    background-color: ${(props) => props.theme.color5};
  }
  &:active {
    background-color: ${(props) => props.theme.color7};
  }
  line-height: 40px;
`;

export const AsyncButton = styled(Button)`
  width: 210px;
  margin-right: 15px;
  position: relative;
`;

export const Loader = styled.div`
  width: 210px;
  height: 40px;
  background-color: ${(props) => props.theme.color8};
  position: absolute;
  top: 0;
  left: 0;
  line-height: 40px;
`;
