import styled from 'styled-components/native';
import {MarginMetrics} from 'src/styles/utils';

export interface ContainerProps {}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  background-color: ${props => props.theme.dark1};
  padding: ${props => props.theme.safeMargin * 3}px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: 'Montserrat-Bold';
  color: ${props => props.theme.light};
  font-size: 38px;
`;

export const ButtonGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Body = styled.View``;

export const FooterText = styled.Text`
  font-family: 'Montserrat-Regular';
  color: ${props => props.theme.light};
  font-size: 12px;
  text-align: center;
  ${MarginMetrics};
`;
