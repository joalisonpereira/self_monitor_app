import {pick} from 'lodash';
import {Container, Title, Inner, ContainerProps} from './styles';

export interface ButtonProps extends ContainerProps {
  children: React.ReactNode;
  variant: ContainerProps['variant'];
}

function Button({children, variant, ...props}: ButtonProps) {
  const containerProps = pick(props, [
    'mt',
    'mr',
    'mb',
    'ml',
    'width',
    'height',
  ]);

  return (
    <Container variant={variant} {...containerProps}>
      <Inner variant={variant} {...props}>
        <Title>{children}</Title>
      </Inner>
    </Container>
  );
}

export default Button;
