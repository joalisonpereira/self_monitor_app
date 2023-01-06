import styled from 'styled-components/native';
import {MarginMetrics} from 'src/styles/utils';

export interface ContainerProps {}

export const Container = styled.ScrollView.attrs(({theme}) => ({
  contentContainerStyle: {
    flexGrow: 1,
    padding: theme.safeMargin * 3,
    paddingTop: 0,
  },
}))`
  background-color: ${props => props.theme.dark1};
`;

export const Title = styled.Text`
  font-family: 'Montserrat-Bold';
  color: ${props => props.theme.light};
  font-size: 38px;
`;

export const Label = styled.Text`
  font-family: 'Montserrat-Bold';
  color: ${props => props.theme.light};
  font-size: 20px;
  ${MarginMetrics};
`;

export const Description = styled.Text`
  font-family: 'Montserrat-Regular';
  color: ${props => props.theme.grey};
  font-size: 12px;
  ${MarginMetrics};
`;

export const TopCard = styled.TouchableOpacity`
  padding: ${props => props.theme.safeMargin * 2}px;
  background-color: ${props => props.theme.dark2};
  border-radius: ${props => props.theme.safeMargin}px;
  ${MarginMetrics};
`;

export const CategoriesRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: ${props => props.theme.safeMargin * 2}px;
  justify-content: space-between;
`;
