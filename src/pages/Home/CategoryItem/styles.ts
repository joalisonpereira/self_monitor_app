import styled from 'styled-components/native';
import {MarginMetrics} from 'src/styles/utils';

type ColorProps = {color: string};

export interface ContainerProps {}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: ${({theme}) => theme.deviceWidth / 2 - theme.safeMargin * 4}px;
  border-radius: ${props => props.theme.safeMargin}px;
  padding: ${props => props.theme.safeMargin * 2}px;
  background-color: ${props => props.theme.dark2};
`;

export const BoxIcon = styled.View<ColorProps>`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color};
  border-radius: 6px;
`;

export const Title = styled.Text`
  font-family: 'Montserrat-SemiBold';
  color: ${props => props.theme.light};
  font-size: 15px;
  ${MarginMetrics};
`;

export const Badge = styled.View<ColorProps>`
  border-radius: ${props => props.theme.safeMargin}px;
  justify-content: center;
  width: 50%;
  height: 24px;
  background-color: ${props => props.color};
  align-items: center;
  border-radius: ${props => props.theme.safeMargin * 2}px;
  margin-top: ${props => props.theme.safeMargin * 3}px;
`;

export const BadgeTitle = styled.Text`
  font-family: 'Montserrat-SemiBold';
  color: ${props => props.theme.light};
  font-size: 12px;
`;
