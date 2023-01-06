import {MarginMetrics} from 'src/styles/utils';
import styled from 'styled-components/native';

export interface ContainerProps {}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  background-color: ${props => props.theme.dark1};
  padding: ${props => props.theme.safeMargin * 3}px;
`;

export const Inner = styled.View`
  flex: 1;
`;

export const CategoryRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  ${MarginMetrics};
`;

export interface CategoryButtonProps {
  color: string;
  active: boolean;
}

export const CategoryButton = styled.TouchableOpacity<CategoryButtonProps>`
  width: ${({theme}) => theme.deviceWidth / 4 - theme.safeMargin * 5}px;
  height: ${({theme}) => theme.deviceWidth / 4 - theme.safeMargin * 5}px;
  background-color: ${props => props.color};
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.safeMargin}px;
  opacity: ${props => (props.active ? 0.3 : 1)};
`;
