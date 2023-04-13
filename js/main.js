import './form.js';
import './form-action.js';
import './effects.js';
import './api.js';
import './avatar.js';
import {initSortPhotosActions } from './sort.js';
import {getData} from './api.js';
import {createErrorMessage} from './message.js';
import {renderPhotos } from './render-photo.js';
import {initBigPhotoActions } from './user-modal.js';

getData()
  .then((data) => {
    renderPhotos(data);
    initSortPhotosActions(data);
    initBigPhotoActions();
  })
  .catch((err) => {
    createErrorMessage(err.message);
  }
  );

