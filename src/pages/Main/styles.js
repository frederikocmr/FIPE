import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 36px 36px 10px 36px;
  background-color: #f6f7f9;
`;

export const Header = styled.Text`
  font-family: 'Product Sans Bold';
  font-size: 33px;
  margin-bottom: 31px;
`;

export const Form = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: #fff;
  background-color: #fff;
  border-radius: 13px;
  height: 55px;
  align-content: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#000',
})`
  flex: 1;
  padding: 0 20px;
  font-family: 'Product Sans Bold';
  font-size: 16px;
  border: #fff;
  border-radius: 13px;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #fff;
  margin-left: 5px;
  padding: 0 20px;
  border-radius: 13px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 29px;
`;

export const Car = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  background-color: #fff;
  border: #fff;
  border-radius: 13px;
  padding: 20px 26px;
  margin-bottom: 20px;
  height: 152px;
`;

export const Figure = styled.Image`
  width: 125.33px;
  height: 91.5px;
`;

export const Info = styled.View`
  margin-left: 30px;
  flex: 1;
`;

export const Brand = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 12px;
  text-align: left;
  color: rgba(8, 13, 45, 0.3);
  line-height: 14;
  text-transform: uppercase;
  font-family: 'Product Sans Bold';
`;

export const Model = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 16px;
  font-family: 'Product Sans Bold';
  color: #080d2d;
  line-height: 19;
  text-align: left;
  margin-top: 2px;
`;

export const Transmission = styled.View`
  flex-direction: row;
  align-self: flex-start;
  align-content: center;
  background-color: #ebeefb;
  align-items: center;
  height: 20px;
  width: auto;
  border-radius: 24px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 5px;
`;

export const TransmissionIcon = styled.Image``;

export const TransmissionText = styled.Text`
  font-size: 10px;
  font-family: 'Product Sans Bold';
  line-height: 12;
  margin-left: 5.5px;
  text-transform: uppercase;
  color: #25338d;
`;

export const Price = styled.View`
  flex-direction: row;
  align-items: baseline;
`;

export const PriceStaticText = styled.Text`
  font-size: 12px;
  text-align: left;
  color: rgba(8, 13, 45, 0.3);
  line-height: 14;
  text-transform: uppercase;
  font-family: 'Product Sans Bold';
  margin-top: 11px;
`;

export const PriceText = styled.Text`
  font-size: ${props => (props.small ? 12 : 20)};
  color: #475ad1;
  font-family: 'Product Sans Bold';
  text-align: left;
  font-weight: bold;
  margin-right: 2px;
`;
