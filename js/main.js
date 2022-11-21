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

const MIN_ID_NUMBER = 1;
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
  const result = [];
  for(let i= 1; i<=MAX_ID_AVATAR; i++){
    result[i] = String(i).padStart(2, 0);
  }
  return result;
})();
console.log(idNumber);


const createLandlordCard = () => ({
  return: {
    autor: {
      avatar: `img/avatars/user${getRandomPositiveInteger(MIN_ID_NUMBER, idNumber)}.png`},
    offer: {
      title: getRandomArrayElement(TITLE),
      address: locationByDefolt.lat + ',' + locationByDefolt.lng,
      price: getRandomPositiveInteger(MIN_COST_PRICE, MAX_COST_PRICE),
      type: getRandomPositiveInteger(TYPE),
      rooms:getRandomPositiveInteger(MIN_NUMBER_ROOMS, MAX_NUMBER_ROOMS),
      guests: getRandomPositiveInteger(MIN_NUMBER_GUEST, MAX_NUMBER_GUEST),
      checkin: getRandomPositiveInteger(CHECKIN),
      checkout: getRandomPositiveInteger(CHECKOUT),
      features: getRandomPositiveInteger(FEATURES),
      description: getRandomPositiveInteger(DESCRIPTION),
      photos: getRandomPositiveInteger(PHOTOS)},

    location : {
      lat: locationByDefolt.lat,
      lng: locationByDefolt.lng}
  }}
);

createLandlordCard();
console.log(createLandlordCard());
