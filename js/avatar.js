import {createErrorMessage} from './message.js';
import {closeFormModal} from './form.js';
const FILE_TYPES = ['png', 'jpeg', 'jpg', 'gif'];
const fileChooser = document.querySelector('.img-upload__input');
const preview = document.querySelector('.img-upload__preview img');

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    preview.src = URL.createObjectURL(file);
  }else{
    createErrorMessage();
    closeFormModal();
  }
});


