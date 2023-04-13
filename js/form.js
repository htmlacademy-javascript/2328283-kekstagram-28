import {scaleImput,imgElements} from './form-action.js';
import {resetEffects} from './effects.js';
import {createErrorMessage, createSuccessMessage} from './message.js';
import {sendData} from './api.js';
import { isEscapeKey} from './util.js';

const MAX_LENGTH_COMMENT = 140;
const MAX_HASHTAG_COUNT = 5;
const VALID_SIMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const form = document.querySelector('.img-upload__form');
const uploadFile = document.querySelector(' #upload-file');
const imgUpload = form.querySelector('.img-upload__overlay');
const closeForm = form.querySelector('.img-upload__cancel ');
const inputText = form.querySelector('.text__description');
const hasTag = form.querySelector('.text__hashtags');
const submitButton = document.querySelector('.img-upload__submit');
const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};
const hasTagErrorText = 'Неккоректно заполнены хештеги';
const descriptionErrorText = `Длина комментария не может составлять больше ${MAX_LENGTH_COMMENT} символов`;

const closeFormModal = () =>{
  imgUpload.classList.add('hidden');
  document.body.classList.remove('modal-open');
  inputText.value = '';
  hasTag.value = '';
};

const onCloseKey = (evt)=>{
  if (isEscapeKey(evt)) {
    closeFormModal();
  }
};

const preventCloseEsc = (evt) =>{
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

closeForm.addEventListener('click',()=>{
  closeFormModal();
});

inputText.addEventListener('keydown',preventCloseEsc);

hasTag.addEventListener('keydown',preventCloseEsc);

const openFotoModal = ()=>{
  imgUpload.classList.remove('hidden');
  document.body.classList.add('modal-open');
  imgElements.style.transform = 'scale(1)';
  scaleImput.value = '100%';
  resetEffects();
  document.addEventListener('keydown',onCloseKey);
};

uploadFile.addEventListener('change',()=>{
  openFotoModal();
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
  inputText,
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

inputText.addEventListener('oninput', () => {
  pristine.validate();
});

hasTag.addEventListener('oninput',()=> {
  pristine.validate();
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const messageSuccessful = () => createSuccessMessage();

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .then(messageSuccessful)
        .catch(
          (err) => {
            createErrorMessage(err.message);
          }
        )
        .finally(unblockSubmitButton);
    }
  });
};

setUserFormSubmit(closeFormModal,);

export{closeFormModal};
