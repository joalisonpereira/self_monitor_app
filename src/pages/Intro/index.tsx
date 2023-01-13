import {useNavigation} from '@react-navigation/native';
import Button from 'src/components/Button';
import {
  Body,
  ButtonGroup,
  Container,
  ContainerProps,
  Title,
  FooterText,
} from './styles';

export interface IntroProps extends ContainerProps {}

function Intro({}: IntroProps) {
  const navigation = useNavigation();
  return (
    <Container>
      <Title>The only productivity app you need, go ahead!</Title>
      <Body>
        <Button onPress={() => navigation.navigate('Home')} variant="default">
          Start
        </Button>
        <ButtonGroup>
          <Button variant="darked" width="48%" mt={2}>
            Google
          </Button>
          <Button variant="darked" width="48%" mt={2}>
            Apple
          </Button>
        </ButtonGroup>
        <FooterText mt={2}>
          By continuing you agree to accept my Terms and Conditions
        </FooterText>
      </Body>
    </Container>
  );
}

export default Intro;
