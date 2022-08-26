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
const MIN_ID_NUMBER = 1;
const MAX_ID_AVATAR = 10;
const MIN_COST_PRICE = 1;
const MAX_COST_PRICE = 10000;

const TITLE = [
  'крутая квартира',
  'лучший дом',
  'frendly палатка'
];


const idNumber = (() => {
const result = [];
for(let i= 1; i<=10; i++){
  result[i] = i;
  if(i<10){
  i = 0 +  'result[i]'
  }
}
})
console.log(idNumber);



const author = ()=>{
  avatar = img/avatars/user`${getRandomPositiveInteger(MIN_ID_NUMBER, idNumber)}.png`
}

  //avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10. Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются.

const offer = ()=>{
   title = getRandomPositiveInteger(TITLE),
   address = `${location.lat}`, `${location.lng}`;
   price = getRandomPositiveInteger(MIN_COST_PRICE, MAX_COST_PRICE);
   type = {
    palace,
    flat,
    house,
    bungalow,
    hotel
}

}

 /* offer, объект — содержит информацию об объявлении. Состоит из полей:
title, строка — заголовок предложения. Придумайте самостоятельно.
address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.lat}}, {{location.lng}}.
price, число — стоимость. Случайное целое положительное число.
type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.

rooms, число — количество комнат. Случайное целое положительное число.

guests, число — количество гостей, которое можно разместить. Случайное целое положительное число.

checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.

description, строка — описание помещения. Придумайте самостоятельно.

photos, массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.

location, объект — местоположение в виде географических координат. Состоит из двух полей:

lat, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000.

lng, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000.
*/
