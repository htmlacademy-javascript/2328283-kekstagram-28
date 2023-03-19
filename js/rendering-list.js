import {objSort} from './data.js';
const picturesList = document.querySelector ('.pictures');
const pictureTemplate = document.querySelector ('#picture')
  .content
  .querySelector('.picture');
const pictureListFragment = document.createDocumentFragment();
const similarPictures = objSort();

similarPictures.forEach(picture => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__comments').textContent = picture.comment.length;
  pictureListFragment.append(pictureElement);
});
picturesList.append(pictureListFragment);


