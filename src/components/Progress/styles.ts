import styled from 'styled-components/native';
import {MarginMetrics, MarginMetricsProps} from 'src/styles/utils';

export interface ContainerProps extends MarginMetricsProps {}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 3px;
  background-color: ${props => props.theme.dark3};
  border-radius: 3px;
  ${MarginMetrics};
`;

export interface LineProps {
  color: string;
  filled: number;
}

export const Line = styled.View<LineProps>`
  width: ${props => props.filled}%;
  height: 100%;
  background-color: ${props => props.color};
`;
