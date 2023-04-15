const getSleepHours = day => {

switch(day) {
  case 'monday':
    return 6;
    break;
  case 'tuesday':
    return 7;
    break;
  case 'wednesday':
    return 5;
    break;
  case 'thursday':
    return 5;
    break;
  case 'friday':
    return 5;
    break;
  case 'Saturday':
    return 7;
    break;
  case 'sunday':
    return 6;
    break;
  default:
    return 'Error!';
  }
};

const getActualSleepHours = () => 6 + 7 + 5 + 5 + 5 + 7 + 6;
/*  getSleepHours ('monday') + 
  getSleepHours ('tuesday') + 
  getSleepHours ('wednesday') + 
  getSleepHours ('thursday') + 
  getSleepHours ('friday') + 
  getSleepHours ('saturday') + 
  getSleepHours ('sunday');
console.log(getSleepHours('friday'));
ERROR EN CODIGO, AL PARECER ALGO NO CUADRA AQUÍ*/ //aqui hay un error al parecer

const getIdealSleepHours = () => {
  const idealHours = 6.5;
  return idealHours * 7;
}


console.log(getIdealSleepHours(8));

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();

  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep');
  }
  else if (actualSleepHours > idealSleepHours) {
      console.log('You got more sleep than needed');
  } else if (actualSleepHours < idealSleepHours){
    console.log('You should get more sleep');
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  } else {
    console.log('Error! Something went wrong, check your code');
  }
}

calculateSleepDebt();
