import { isEscapeKey } from './util.js';

const RENDER_COMMENTS = 5;

const bigPhotoElement = document.querySelector('.big-picture');
const bigPhotoCloseButton = bigPhotoElement.querySelector('.big-picture__cancel');
const imageElement = bigPhotoElement.querySelector('.big-picture__img img');
const descriptionElement = bigPhotoElement.querySelector('.social__caption');
const likesElement = bigPhotoElement.querySelector('.likes-count');
const commentsCountElement = bigPhotoElement.querySelector('.comments-count');
const loadCommentsButton = bigPhotoElement.querySelector('.social__comments-loader');
const commentsListElement = bigPhotoElement.querySelector('.social__comments');
const commentsCurrentElement = bigPhotoElement.querySelector('.comments-current');
const commentTemplate = bigPhotoElement.querySelector('.social__comment');

let countComments = 0;
let commentsLength = 0;
let commentsTemp;

const fillCommentData = (comment) => {
  const commentClone = commentTemplate.cloneNode(true);
  commentClone.querySelector('.social__picture').src = comment.avatar;
  commentClone.querySelector('.social__picture').alt = comment.name;
  commentClone.querySelector('.social__text').textContent = comment.message;
  return commentClone;
};

const fillCommentsCurrent = (counter) => {
  commentsCurrentElement.textContent = counter;
};

const removeLoadCommentsButton = () => loadCommentsButton.classList.add('hidden');

const renderComments = (comments) => {
  if (!commentsTemp) {
    commentsLength = comments.length;
    commentsTemp = [...comments];
  }

  const renderingComments = commentsTemp.splice(0, RENDER_COMMENTS < commentsTemp.length
    ? RENDER_COMMENTS : commentsTemp.length);

  renderingComments.forEach((comment) => {
    commentsListElement.append(fillCommentData(comment));
    countComments++;
  });

  fillCommentsCurrent(countComments);

  if (countComments === commentsLength) {
    removeLoadCommentsButton();
  }
};

const fillPhotoData = (photo) => {
  imageElement.src = photo.url;
  descriptionElement.textContent = photo.description;
  likesElement.textContent = photo.likes;
  commentsCountElement.textContent = photo.comments.length;

  commentsListElement.innerHTML = '';
  renderComments(photo.comments);
};

const showBigPhotoElement = () => {
  countComments = 0;
  commentsTemp = '';

  bigPhotoElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
};

const hiddensBigPhotoElement = () => {
  bigPhotoElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  loadCommentsButton.classList.remove('hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
};

const onLoadCommentsButtonClick = (evt) => {
  evt.preventDefault();
  renderComments();
};

const onBigPhotoCloseButtonClick = (evt) => {
  evt.preventDefault();
  hiddensBigPhotoElement();
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hiddensBigPhotoElement();
  }
}

const initBigPhotoActions = () => {
  loadCommentsButton.addEventListener('click', onLoadCommentsButtonClick);
  bigPhotoCloseButton.addEventListener('click', onBigPhotoCloseButtonClick);
};

const showBigPhoto = (photo) => {
  showBigPhotoElement();
  fillPhotoData(photo);
};

export { showBigPhoto, initBigPhotoActions };
