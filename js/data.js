import {getRandomInteger,getRandomArrayElement} from './util.js';

const PHOTO_COUNT = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 6;
const MAX_COMMENTS = 16;

const NAME_MESSAGE = [
  'Александр',
  'Олег',
  'Герас',
  'Виктор',
  'Лолита',
  'Анастасия'
];

const COMMENT_LINE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ?!'
];

const DESCRIPTION_FOTO = [
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
let commentId = 1;
let photoId = 1;
const createComment = () => ({
  id: commentId++,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(COMMENT_LINE),
  name: getRandomArrayElement(NAME_MESSAGE),
});

const createPhoto = () => ({
  id: photoId,
  url: `photos/${photoId++}.jpg`,
  description: getRandomArrayElement(DESCRIPTION_FOTO),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: Array.from({ length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS) }, createComment),
});
const objSort = () => Array.from({ length: PHOTO_COUNT }, createPhoto);
export {objSort};
