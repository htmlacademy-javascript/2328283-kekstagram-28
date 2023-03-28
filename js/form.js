const form = document.querySelector('.img-upload__form');
const uploadFile = document.querySelector(' #upload-file');
const imgUpload = form.querySelector('.img-upload__overlay');
const closeForm = form.querySelector('.img-upload__cancel ');
const inputText = form.querySelector('.text__description');
const hasTag = form.querySelector('.text__hashtags');
const description = form.querySelector('.text__description');
const hasTagErrorText = 'Неккоректно заполнены хештеги';
const MAX_LENGTH_COMMENT = 140;
const descriptionErrorText = `Длина комментария не может составлять больше ${MAX_LENGTH_COMMENT} символов`;
const MAX_HASHTAG_COUNT = 5;
const VALID_SIMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

uploadFile.addEventListener('change',()=>{
  imgUpload.classList.remove('hidden');
  document.body.classList.add('modal-open');
});
closeForm.addEventListener('click',()=>{
  imgUpload.classList.add('hidden');
  document.body.classList.remove('modal-open');
});
const onCloseKey = (evt)=>{
  if (evt.key === 'Escape') {
    imgUpload.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
};
document.addEventListener('keydown',onCloseKey);
inputText.addEventListener('keydown',(evt)=>{
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
});
hasTag.addEventListener('keydown',(evt)=>{
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
});
const pristine = new Pristine (form,{
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass:'img-upload__field-wrapper__error',
});
function validateLength (value) {
  return value.length <= MAX_LENGTH_COMMENT;
}
pristine.addValidator(
  description,
  validateLength,
  descriptionErrorText
);
const isValidTag = (tag)=> VALID_SIMBOLS .test(tag);
const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;
const hasUniqueTags = (tags) => {
  const loaderCaseTags = tags.map((tag) => tag.toLowerCase());
  return loaderCaseTags.length === new Set(loaderCaseTags).size;
};
const validateHashTag = (value) => {
  const tags = value.trim().split(' ').filter((tag)=> tag.trim().length);
  return hasUniqueTags(tags) && hasValidCount(tags) && tags.every(isValidTag);
};
pristine.addValidator(
  hasTag,
  validateHashTag,
  hasTagErrorText,
);
description.addEventListener('oninput', () => {
  pristine.validate();
});
hasTag.addEventListener('oninput',()=> {
  pristine.validate();
});
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
});
