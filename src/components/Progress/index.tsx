import {Container, ContainerProps, Line, LineProps} from './styles';

export interface ProgressProps extends ContainerProps, LineProps {}

function Progress({color, filled, ...props}: ProgressProps) {
  return (
    <Container {...props}>
      <Line testID="progress-line" color={color} filled={filled} />
    </Container>
  );
}

export default Progress;
