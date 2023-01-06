import {css} from 'styled-components/native';

export type MarginMetricsProps = {
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
};

export const MarginMetrics = css<MarginMetricsProps>`
  margin-top: ${props => (props.mt ?? 0) * props.theme.safeMargin}px;
  margin-right: ${props => (props.mr ?? 0) * props.theme.safeMargin}px;
  margin-bottom: ${props => (props.mb ?? 0) * props.theme.safeMargin}px;
  margin-left: ${props => (props.ml ?? 0) * props.theme.safeMargin}px;
`;
