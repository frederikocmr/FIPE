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
  }).isRequired,
};

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: {
        id: '1',
        brand: 'Marca',
        model: 'Modelo',
        year: 'Ano',
        price: 'R$ 120.700,00',
        fuel: 'Álcool',
        horsepower: '450 cv',
        displacement: '1.000',
        code: '56712-1',
      },
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
          <Price>{car.price}*</Price>
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
          <Code>Código FIPE: {car.code}</Code>
        </Card>
      </Container>
    );
  }
}

Detail.propTypes = propTypes;

export default Detail;
