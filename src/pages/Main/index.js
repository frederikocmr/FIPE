/* eslint-disable no-await-in-loop */
import {
  ActivityIndicator,
  Text,
  View,
  Image,
  ToastAndroid,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';
import Utils from '../../utils/filterCars';

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
  Waiting,
  WaitingText,
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
      cars: [],
      carModel: '',
      randomBrand: 0,
      bufferSize: 10,
      loading: false,
      loadingList: true,
    };
  }

  async componentDidMount() {
    try {
      const randomBrand = await this.getRandomBrand();
      const cars = await this.getCarsFromBrand(randomBrand);

      this.setState({ cars, randomBrand, loadingList: false });
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

  getCarsFromBrand = async brand => {
    const { bufferSize, randomBrand } = this.state;
    const brandToSearch = brand !== null ? brand : randomBrand;
    brandToSearch.id = 47;
    try {
      const { data } = await api.get(`/marcas/${brandToSearch.id}/modelos`);

      const cars = await this.getCars(
        data.modelos.slice(bufferSize - bufferSize, bufferSize),
        brandToSearch.id
      );

      return cars;
    } catch (error) {
      this.showError('os modelos', error);
      return [];
    }
  };

  getCars = async (models, brandId) => {
    const carsArray = [];

    for (let index = 0; index < models.length; index += 1) {
      const modelId = String(models[index].codigo);
      const { data: anos } = await api.get(
        `/marcas/${brandId}/modelos/${modelId}/anos`
      );

      const { codigo: yearId } = anos[anos.length - 1];

      const { data: infos } = await api.get(
        `/marcas/${brandId}/modelos/${modelId}/anos/${yearId}`
      );

      const cars = {
        id: String(index),
        brand: infos.Marca,
        model: Utils.getCarName(infos.Modelo),
        transmission: Utils.getCarTransmission(infos.Modelo),
        price: infos.Valor,
        year: infos.AnoModelo,
        fuel: infos.Combustivel,
        horsepower: Utils.getCarHorsepower(infos.Modelo),
        displacement: Utils.getCarDisplacement(infos.Modelo),
        fipe: infos.CodigoFipe,
      };

      carsArray.push(cars);
    }

    return carsArray;
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

  loadItems = () => {
    // this.setState({ loadingList: true });
  };

  renderItem = ({ item }) => (
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
                  item.transmission === 'Manual' ? SettingsImage : LightingImage
                }
              />
              <TransmissionText>{item.transmission}</TransmissionText>
            </Transmission>
          ) : (
            <Text> &nbsp; </Text>
          )}
          <PriceStaticText>Preço</PriceStaticText>
          <Price>
            <PriceText small>{item.price.split(' ')[0]}</PriceText>
            <PriceText>{item.price.split(' ')[1].split(',')[0]}</PriceText>
            <PriceText small>{item.price.slice(-3)}</PriceText>
          </Price>
        </Info>
      </Car>
    </TouchableOpacity>
  );

  renderFooter = () => {
    const { loadingList } = this.state;

    if (!loadingList) return null;
    return (
      <Waiting>
        <WaitingText>Aguarde, estamos buscando os veículos!</WaitingText>
        <ActivityIndicator size="large" color="#475ad1" />
      </Waiting>
    );
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
          onEndReached={this.loadItems}
          renderItem={this.renderItem}
          onEndReachedThreshold={0.1}
          ListFooterComponent={this.renderFooter}
        />
      </Container>
    );
  }
}

Main.propTypes = propTypes;

export default Main;
