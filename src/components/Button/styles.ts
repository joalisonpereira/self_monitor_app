import {Pressable, PressableProps, ViewStyle} from 'react-native';
import styled from 'styled-components/native';
import {MarginMetrics, MarginMetricsProps} from 'src/styles/utils';

export interface ModeProps {
  mode: 'default' | 'darked';
}

export interface ContainerProps
  extends ModeProps,
    MarginMetricsProps,
    PressableProps {
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
}

export const Container = styled.View<ContainerProps>`
  width: ${props => props.width ?? '100%'};
  height: ${props => props.height ?? '50px'};
  border-radius: ${props => props.theme.safeMargin * 1.5}px;
  overflow: hidden;
  border-width: 1px;
  border-color: ${props =>
    ({
      default: props.theme.primary,
      darked: 'grey',
    }[props.mode])};
  ${MarginMetrics};
`;

export const Inner = styled(Pressable).attrs<ModeProps>(({mode, theme}) => ({
  android_ripple: {
    color: mode === 'default' ? '#00B0F9' : theme.dark2,
  },
}))<ModeProps>`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${props =>
    ({
      default: props.theme.primary,
      darked: 'transparent',
    }[props.mode])};
`;

export const Title = styled.Text`
  font-family: 'Montserrat-Bold';
  color: ${props => props.theme.light};
  font-size: 13px;
`;
