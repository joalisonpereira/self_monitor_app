import styled, {css} from 'styled-components/native';

export interface ContainerProps {
  active: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.dark2};
  padding: 0 ${props => props.theme.safeMargin * 3}px;
  width: 100%;
  height: 50px;
  border-radius: ${props => props.theme.safeMargin}px;
  border-width: 1.5px;
  border-color: ${props => props.theme.dark2};
  margin-top: ${props => props.theme.safeMargin * 2}px;
  ${props =>
    props.active &&
    css`
      border-color: ${props.theme.green};
    `}
`;

export const Title = styled.Text`
  font-family: 'Montserrat-Bold';
  color: ${props => props.theme.light};
  font-size: 12px;
`;
