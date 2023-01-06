import styled from 'styled-components/native';

export interface ContainerProps {}

export const Container = styled.View`
  flex: 1;
  padding: ${props => props.theme.safeMargin * 3}px;
  padding-top: 0;
  background-color: ${props => props.theme.dark1};
`;

export const HeaderRightBtn = styled.TouchableOpacity<{headerHeight: number}>`
  height: ${props => props.headerHeight}px;
  padding: ${props => props.theme.safeMargin}px;
  justify-content: center;
  align-items: center;
`;
