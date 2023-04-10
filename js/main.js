import './form.js';
import './form-action.js';
import './effects.js';
import './api.js';
import { initSortPhotosActions } from './sort.js';
import {getData} from './api.js';
import{showAlert} from './util.js';
import { renderPhotos } from './render-photo.js';
import { initBigPhotoActions } from './user-modal.js';

getData()
  .then((photos) => {
    renderPhotos(photos);
    initSortPhotosActions(photos);
    initBigPhotoActions();
  })
  .catch((err) => {
    showAlert(err.message);
  }
  );

