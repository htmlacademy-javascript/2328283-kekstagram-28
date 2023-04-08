
import './rendering-list.js';
import './form.js';
import './form-action.js';
import './effectus.js';
import './api-form.js';
import {getData} from './api-form.js';
import{showAlert} from './util.js';
import {renderImg,renderComments} from './rendering-list.js';
import {clicklPictires} from './user-modual.js';
getData()
  .then((data) =>{
    renderImg(data);
    renderComments(data);
    clicklPictires();
  }) .catch(
    (err) => {
      showAlert(err.message);
    }
  );

