import {pick} from 'lodash';
import {Container, Title, Inner, ContainerProps} from './styles';

export interface ButtonProps extends ContainerProps {
  children: React.ReactNode;
  mode: ContainerProps['mode'];
}

function Button({children, mode = 'default', ...props}: ButtonProps) {
  const containerProps = pick(props, [
    'mt',
    'mr',
    'mb',
    'ml',
    'width',
    'height',
  ]);

  return (
    <Container mode={mode} {...containerProps}>
      <Inner mode={mode} {...props}>
        <Title>{children}</Title>
      </Inner>
    </Container>
  );
}

export default Button;
