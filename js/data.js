import {getRandomInteger,getRandomArrayElement} from './util.js';
const COMMENTLINE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMEMESSAGE = [
  'Александр',
  'Олег',
  'Герас',
  'Виктор',
  'Лолита',
  'Анастасия'
];
const DESCRIPTIONFOTO = [
  'Еще один день в копилку #ЖизньвКайф',
  'Улыбка — единственный тренд в моде, который актуален всегда',
  'Жизнь похожа на фотокамеру: вам просто нужно смотреть на нее с улыбкой',
  'Диснеевская принцесса, которую вы заслужили',
  'Good vibes only (Только позитивное настроение)',
  'Miss me',
  'Она пела мне песни про лето,меняла меня мелонхолика',
  'Он принмал ее такой какая она есть...и успокоительное',
  'Сначала ты шутишь смешнее мужика,а потом тебе тридцать'
];
function descriptionPhoto(_, id) {
  return {
    id: id + 1,
    url: `photos/${id + 1}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONFOTO),
    likes:getRandomInteger(15, 200),
    comment:{
      id:id + 2,
      avatar:`img/avatar-${getRandomInteger(1,6)}.svg`,
      message:getRandomArrayElement(COMMENTLINE),
      name: getRandomArrayElement(NAMEMESSAGE)
    }
  };
}
const objSort = () => Array.from({ length: 25 }, descriptionPhoto).sort(() => Math.random() - 0.5);
export {objSort};
