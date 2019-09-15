import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 10px 36px 10px 36px;
  background-color: #f6f7f9;
`;

export const BackButton = styled(RectButton)`
  width: 38px;
  height: 49px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.Text`
  font-family: 'Product Sans Bold';
  font-size: 33px;
  margin-bottom: 33px;
`;

export const Card = styled.View`
  flex: 1;
  flex-direction: column;
  margin-bottom: 10px;
  background-color: #fff;
  border: #fff;
  border-radius: 13px;
  padding: 20px 26px;
  margin-bottom: 54.6px;
  height: 462px;
`;

export const CarFigure = styled.Image``;

export const Name = styled.Text`
  font-family: 'Product Sans Regular';
  color: #080d2d;
  opacity: 0.7;
  font-size: 18px;
  text-align: left;
  line-height: 22px;
  margin-top: 20.6px;
`;

export const Price = styled.Text`
  font-family: 'Product Sans Bold';
  text-align: left;
  font-size: 26px;
  line-height: 31px;
  margin-top: 11px;
`;

export const Info = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
`;

export const InfoItem = styled.View``;

export const InfoItemImage = styled.View`
  width: 73px;
  height: 73px;
  border-radius: 16px;
  background-color: #f6f7f9;
  align-items: center;
  justify-content: center;
`;

export const InfoItemText = styled.Text`
  font-family: 'Product Sans Bold';
  margin-top: 17px;
  text-transform: uppercase;
  color: #080d2d;
  opacity: 0.5;
  font-size: ${props => (props.small ? 10 : 12)};
  margin-bottom: ${props => (props.small ? 4 : 2)};
`;

export const InfoValue = styled.Text`
  font-family: 'Product Sans Bold';
`;

export const Code = styled.Text`
  font-family: 'Product Sans Regular';
  bottom: 11.4;
  left: 20;
  color: #080d2d;
  opacity: 0.7;
  position: absolute;
  font-size: 14px;
  text-align: left;
`;
