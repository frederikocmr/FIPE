import { ActivityIndicator, Text, Image, ToastAndroid } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';

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
          brand: 'Marca',
          model: 'Modelo',
          transmission: 'Transmissão',
          price: 'R$ 92.799,00',
        },
      ],
      loading: false,
    };
  }

  async componentDidMount() {
    try {
      const randomBrand = await this.getRandomBrand();

      if (randomBrand !== null) {
        const cars = await this.getCars(randomBrand);

        this.setState({ cars });
      }
    } catch (error) {
      this.showError('no servidor', error);
    }
  }

  getRandomBrand = async () => {
    try {
      const { data } = await api.get('/marcas');

      const brands = data.map(value => ({
        name: value.nome,
        id: value.codigo,
      }));

      const max = brands.length - 1;

      const arrayPosition = parseInt(Math.random() * (max + 1), 10);

      const brand = brands[arrayPosition];

      return brand;
    } catch (error) {
      this.showError('as marcas', error);

      return null;
    }
  };

  getCars = async brand => {
    try {
      const { data } = await api.get(`/marcas/${brand.id}/modelos`);
      console.tron.log(data);

      const cars = data.modelos.map(value => ({
        id: String(value.codigo),
        model: this.getCarName(value.nome.split(' ')),
        brand: brand.name,
        transmission: this.getCarTransmission(value.nome.split(' ')),
        price: 'R$ 92.799,00',
      }));

      console.tron.log(cars);

      return cars.slice(0, 10);
    } catch (error) {
      this.showError('os modelos', error);
      return [];
    }
  };

  getCarName = value => {
    let name = '';

    for (let i = 0; i < 3; i += 1) {
      if (Number(value[i]) > 0 || !value[i]) {
        name += '';
      } else {
        name += `${value[i]} `;
      }
    }
    return name;
  };

  getCarTransmission = value => {
    if (value.indexOf('Aut.') >= 0) {
      return 'Automático';
    }
    if (value.indexOf('Man.') >= 0) {
      return 'Manual';
    }
    return null;
  };

  showError = (text, error) => {
    ToastAndroid.show(
      `Aconteceu algum erro ao buscar ${text}. Por favor, tente novamente mais tarde!`,
      ToastAndroid.LONG
    );

    console.tron.log(error);
  };

  handleSearch = async () => {
    const { carModel, cars } = this.state;

    cars.push({
      id: '1133',
      brand: 'Marca',
      model: 'Modelo',
      transmission: 'Transmissão',
      price: 'R$ 92.799,00',
    });
    this.setState({ cars, carModel });
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
          onEndReached={({ distanceFromEnd }) => {
            console.tron.log(distanceFromEnd);
          }}
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
                  {item.transmission ? (
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
                  ) : (
                    <Text> &nbsp; </Text>
                  )}
                  <PriceStaticText>Preço</PriceStaticText>
                  <Price>
                    <PriceText small>{item.price.substring(0, 2)}</PriceText>
                    <PriceText>
                      {item.price.split(' ')[1].split(',')[0]}
                    </PriceText>
                    <PriceText small>{item.price.slice(-3)}</PriceText>
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
