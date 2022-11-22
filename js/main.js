function getRandomPositiveFloat (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const getRandomArrayElement = (elements)=> elements[getRandomPositiveInteger(0, elements.length-1)];

const MAX_ID_AVATAR = 10;
const MIN_COST_PRICE = 1;
const MAX_COST_PRICE = 10000;
const MIN_NUMBER_ROOMS = 1;
const MAX_NUMBER_ROOMS = 5;
const MIN_NUMBER_GUEST = 1;
const MAX_NUMBER_GUEST = 6;
const LOCATION_LAT_MIN = 35.65000;
const LOCATION_LAT_MAX = 35.70000;
const LOCATION_LNG_MIN = 139.70000;
const LOCATION_LNG_MAX = 139.80000;
const NUMBER_OBJECTS = 10;

const locationByDefolt = {
  lat: getRandomPositiveFloat(LOCATION_LAT_MIN, LOCATION_LAT_MAX),
  lng: getRandomPositiveFloat(LOCATION_LNG_MIN, LOCATION_LNG_MAX)};

const TITLE = [
  'крутая квартира',
  'лучший дом',
  'frendly палатка'
];

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];


const CHECKIN = [
  '12:00',
  '13:00',
  '14:00'
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const DESCRIPTION = [
  'Большой шатер-палатка',
  'Бомж-стайл',
  'Займемся любовью прямо у входа',
  'Сюда будет страшно зайти',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const idNumber = (() => {
  const results = [];
  for(let i= 1; i<=MAX_ID_AVATAR; i++){
    results[i] = i;
    if (i<MAX_ID_AVATAR){
      results[i] = '0'.concat(i);}

  }

  return results;
})();

const serialNumberPhoto = getRandomArrayElement(idNumber);

const createLandlordCard = () => ({
  return: {
    autor: {
      avatar: `img/avatars/user${serialNumberPhoto}.png`},
    offer: {
      title: getRandomArrayElement(TITLE),
      address: `${locationByDefolt.lat}, ${locationByDefolt.lng}`,
      price: getRandomPositiveInteger(MIN_COST_PRICE, MAX_COST_PRICE),
      type: getRandomArrayElement(TYPE),
      rooms:getRandomPositiveInteger(MIN_NUMBER_ROOMS, MAX_NUMBER_ROOMS),
      guests: getRandomPositiveInteger(MIN_NUMBER_GUEST, MAX_NUMBER_GUEST),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getRandomArrayElement(FEATURES),
      description: getRandomArrayElement(DESCRIPTION),
      photos: getRandomArrayElement(PHOTOS)},

    location : {
      lat: locationByDefolt.lat,
      lng: locationByDefolt.lng}
  }});


const createObjectLandlordСards = () =>{
  const ObjectLandlordСards = Array.from({length: NUMBER_OBJECTS}, createLandlordCard);
  return ObjectLandlordСards;
};

createObjectLandlordСards();
