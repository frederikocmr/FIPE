import { ActivityIndicator, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  Header,
  List,
  Car,
  Brand,
  Model,
  Transmission,
  TransmissionIcon,
  TransmissionText,
  Figure,
  Info,
  Price,
  PriceStaticText,
  PriceText,
} from './styles';

import SearchImage from '../../assets/images/search.png';
import CarImage from '../../assets/images/car.png';
import LightingImage from '../../assets/images/lighting-button.png';
import SettingsImage from '../../assets/images/settings.png';

const propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carModel: '',
      cars: [
        {
          id: '1',
          brand: 'Chevrolet',
          model: 'Sonic',
          transmission: 'Manual',
          price: 'R$ 92.799,00',
        },
        {
          id: '2',
          brand: 'Chevrolet',
          model: 'Cobalt',
          transmission: 'Automático',
          price: 'R$ 92.799,00',
        },
        {
          id: '3',
          brand: 'Chevrolet',
          model: 'S10',
          transmission: 'Manual',
          price: 'R$ 92.799,00',
        },
        {
          id: '4',
          brand: 'Chevrolet',
          model: 'Celta',
          transmission: 'Manual',
          price: 'R$ 92.799,00',
        },
      ],
      loading: false,
    };
  }

  handleSearch = async () => {
    const { carModel } = this.state;
    console.tron.log(carModel);
  };

  handleNavigate = car => {
    const { navigation } = this.props;
    navigation.navigate('Detail', { car });
  };

  render() {
    const { carModel, cars, loading } = this.state;

    return (
      <Container>
        <Header>Carros </Header>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Ache seu carro..."
            value={carModel}
            onChangeText={text => this.setState({ carModel: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleSearch}
          />
          <SubmitButton loading={loading} onPress={this.handleSearch}>
            {loading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
                <Image source={SearchImage} />
              )}
          </SubmitButton>
        </Form>

        <List
          data={cars}
          keyExtractor={car => car.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                this.handleNavigate(item);
              }}
            >
              <Car>
                <Figure source={CarImage} />
                <Info>
                  <Brand>{item.brand}</Brand>
                  <Model>{item.model}</Model>
                  <Transmission>
                    <TransmissionIcon
                      source={
                        item.transmission === 'Manual'
                          ? SettingsImage
                          : LightingImage
                      }
                    />
                    <TransmissionText>{item.transmission}</TransmissionText>
                  </Transmission>
                  <PriceStaticText>Preço</PriceStaticText>
                  <Price>
                    <PriceText small>{item.price.substring(0, 2)}</PriceText>
                    <PriceText>{item.price.substring(3, 9)}</PriceText>
                    <PriceText small>{item.price.substring(9, 12)}</PriceText>
                  </Price>
                </Info>
              </Car>
            </TouchableOpacity>
          )}
        />
      </Container>
    );
  }
}

Main.propTypes = propTypes;

export default Main;
