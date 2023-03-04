import './util.js';
import './data.js';
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
  };
}
const objSort = Array.from({ length: 25 }, descriptionPhoto).sort(() => Math.random() - 0.5);
import {getRandomInteger} from './util.js';
import {commentLine} from './data.js';
import {nameMessage} from './data.js';
import {getRandomArrayElement} from './util.js';
