const userModualElement = document.querySelector('.big-picture');
const userModalClose = userModualElement.querySelector('.big-picture__cancel');
const pictureAll = document.querySelectorAll('.picture');
const likesСounter = document.querySelector('.social__comment-count');
const comentLoader = document.querySelector('.comments-loader');
const clicklPictires = (picture) =>{
  const bigPicture = userModualElement.querySelector('.big-picture__img img');
  const modalLikes = userModualElement.querySelector('.likes-count');
  const modalDescription = userModualElement.querySelector('.social__caption');
  const modalConst = userModualElement.querySelector('.comments-count');
  picture.forEach(element => {
    element.addEventListener('click',()=>{
      bigPicture.src = element.querySelector('.picture__img').src;
      modalLikes.textContent = element.querySelector('.picture__likes').textContent;
      modalDescription.textContent = element.querySelector('.picture__img').alt;
      modalConst.textContent = element.querySelector('.picture__comments').textContent;
      userModualElement.classList.remove('hidden');
      likesСounter.classList.add('hidden');
      comentLoader.classList.add('hidden');
      document.body.classList.add('modal-open');
    });
  });
};
clicklPictires(pictureAll);
userModalClose.onclick = () => userModualElement.classList.add('hidden');
document.onkeydown = evt => {
  if (evt.key === 'Escape') {
    userModualElement.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
};


