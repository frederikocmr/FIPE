/* eslint-disable no-restricted-globals */
/* eslint-disable no-param-reassign */
function getCarName(value) {
  value = value.split(' ');
  let name = '';

  for (let i = 0; i < 3; i += 1) {
    if (Number(value[i]) > 0 || !value[i]) {
      name += '';
    } else {
      name += `${value[i]} `;
    }
  }
  return name;
}

function getCarTransmission(value) {
  value = value.split(' ');
  if (value.indexOf('Aut.') >= 0) {
    return 'Automático';
  }
  if (value.indexOf('Man.') >= 0) {
    return 'Manual';
  }
  return null;
}

function getCarHorsepower(value) {
  value = value.split(' ');
  let horsepower = 'Indisp.';

  value.forEach(element => {
    if (element.indexOf('cv')) {
      const match = element.match(/(\d+)/);
      if (match) {
        horsepower = `${String(match[0])} cv`;
      }
    }
  });

  return horsepower;
}

function getCarDisplacement(value) {
  value = value.split(' ');
  let displacement = 'Indisp.';

  value.forEach(element => {
    if (element.indexOf('.')) {
      let num = Number(element);

      if (!isNaN(num)) {
        num *= 1000;
        displacement = String(num);
      }
    }
  });

  return displacement;
}

export default {
  getCarName,
  getCarTransmission,
  getCarHorsepower,
  getCarDisplacement,
};
