import { Image } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  BackButton,
  Header,
  Card,
  CarFigure,
  Name,
  Price,
  PriceText,
  Info,
  InfoItem,
  InfoItemImage,
  InfoItemText,
  InfoValue,
  Code,
} from './styles';

import BackImage from '../../assets/images/arrow-down.png';
import CarImage from '../../assets/images/car-big.png';
import GaugeImage from '../../assets/images/gauge.png';
import StarterImage from '../../assets/images/starter.png';
import HorsepowerImage from '../../assets/images/horsepower.png';

const propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
  }).isRequired,
};

class Detail extends Component {
  constructor(props) {
    super(props);

    const { navigation } = this.props;
    const car = navigation.getParam('car');

    console.tron.log(car);

    this.state = {
      car,
    };
  }

  handleNavigate = () => {
    const { navigation } = this.props;
    navigation.navigate('Main');
  };

  render() {
    const { car } = this.state;

    return (
      <Container>
        <BackButton onPress={this.handleNavigate}>
          <Image source={BackImage} />
        </BackButton>
        <Header> Detalhes </Header>
        <Card>
          <CarFigure source={CarImage} />
          <Name>
            {car.brand} - {car.model} ({car.year})
          </Name>
          <Price>
            <PriceText small>{car.price.substring(0, 2)}</PriceText>
            <PriceText>{car.price.substring(3, 13)}*</PriceText>
          </Price>
          <Info>
            <InfoItem>
              <InfoItemImage>
                <Image source={StarterImage} />
              </InfoItemImage>
              <InfoItemText small>Combustível</InfoItemText>
              <InfoValue>{car.fuel}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoItemImage>
                <Image source={HorsepowerImage} />
              </InfoItemImage>
              <InfoItemText>Potência</InfoItemText>
              <InfoValue>{car.horsepower}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoItemImage>
                <Image source={GaugeImage} />
              </InfoItemImage>
              <InfoItemText>Cilindradas</InfoItemText>
              <InfoValue>{car.displacement}</InfoValue>
            </InfoItem>
          </Info>
          <Code>Código FIPE: {car.fipe}</Code>
        </Card>
      </Container>
    );
  }
}

Detail.propTypes = propTypes;

export default Detail;
