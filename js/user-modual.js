const userModalElement = document.querySelector('.big-picture');
const userModalClose = userModalElement.querySelector('.big-picture__cancel');
const pictureAll = document.querySelectorAll('.picture');
const likesCounter = document.querySelector('.social__comment-count');
const comentLoader = document.querySelector('.comments-loader');
const clicklPictires = (picture) =>{
  const bigPicture = userModalElement.querySelector('.big-picture__img img');
  const modalLikes = userModalElement.querySelector('.likes-count');
  const modalDescription = userModalElement.querySelector('.social__caption');
  const modalConst = userModalElement.querySelector('.comments-count');
  picture.forEach((element) => {
    element.addEventListener('click',()=>{
      bigPicture.src = element.querySelector('.picture__img').src;
      modalLikes.textContent = element.querySelector('.picture__likes').textContent;
      modalDescription.textContent = element.querySelector('.picture__img').alt;
      modalConst.textContent = element.querySelector('.picture__comments').textContent;
      userModalElement.classList.remove('hidden');
      likesCounter.classList.add('hidden');
      comentLoader.classList.add('hidden');
      document.body.classList.add('modal-open');
    });
  });
};
// // console.log(pictureAll)
// clicklPictires(pictureAll);

userModalClose.onclick = () => userModalElement.classList.add('hidden');
document.onkeydown = (evt) => {
  if (evt.key === 'Escape') {
    userModalElement.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
};


export {clicklPictires}
