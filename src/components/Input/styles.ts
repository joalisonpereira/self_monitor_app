import {TextInputProps} from 'react-native';
import styled from 'styled-components/native';

export interface ContainerProps extends TextInputProps {}

export const Container = styled.TextInput.attrs<ContainerProps>(({theme}) => ({
  placeholderTextColor: theme.dark3,
}))<ContainerProps>`
  background-color: ${props => props.theme.dark2};
  border-radius: ${props => props.theme.safeMargin}px;
  padding: 0 ${props => props.theme.safeMargin * 1.5}px;
  width: 100%;
  height: 50px;
  color: ${props => props.theme.light};
  font-family: 'Montserrat-SemiBold';
`;
