import { objSort } from './data.js';
const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureListFragment = document.createDocumentFragment();
const similarPictures = objSort();
const coments = document.querySelector('.social__comments');
const modalComment = coments.querySelector('.social__comment');

similarPictures.forEach((picture) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__img').alt = picture.description;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
  pictureElement.dataset.thumbnaiId = picture.id;
  pictureListFragment.append(pictureElement);
});
picturesList.append(pictureListFragment);
coments.innerHTML = '';
similarPictures.forEach(element => {
  const comentModal = modalComment.cloneNode(true);
  comentModal.querySelector('.social__picture').src = element.comments[1].avatar;
  comentModal.querySelector('.social__picture').alt = element.comments[1].name;
  comentModal.querySelector('.social__text').textContent = element.comments[1].message;
  pictureListFragment.append(comentModal);
});
coments.append(pictureListFragment);
