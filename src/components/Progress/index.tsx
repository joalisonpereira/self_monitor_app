import {Container, ContainerProps, Line, LineProps} from './styles';

export interface ProgressProps extends ContainerProps, LineProps {}

function Progress({color, filled: fillSize, ...props}: ProgressProps) {
  return (
    <Container {...props}>
      <Line color={color} filled={fillSize} />
    </Container>
  );
}

export default Progress;
