const commentLine = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const nameMessage = [
  'Александр',
  'Олег',
  'Иллон',
  'Виктор',
  'Лалита',
  'Анастасия'
];

function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
function descriptionPhoto(_, id) {
  return {
    id: id + 1,
    url: `photos/${id + 1}.jpg`,
    description: 'строка — описание фотографии.',
    likes:getRandomInteger(15, 200),
    comment:{
      id:id + 2,
      avatar:`img/avatar-${getRandomInteger(1,6)}.svg`,
      message:getRandomArrayElement(commentLine),
      name: getRandomArrayElement(nameMessage)
    }
}
}
const objSort = Array.from({ length: 25 }, descriptionPhoto).sort(() => Math.random() - 0.5);


