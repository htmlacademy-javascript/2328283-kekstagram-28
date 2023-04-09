
import './form.js';
import './form-action.js';
import './effectus.js';
import './api-form.js';
import {getData} from './api-form.js';
import{showAlert} from './util.js';
import { renderPhotos } from './render-photo.js';
import { initBigPhotoActions } from './user-modal.js';

getData()
  .then((photos) => {
    renderPhotos(photos);
    initBigPhotoActions();
  })
  .catch((err) => {
    showAlert(err.message);
  }
  );
