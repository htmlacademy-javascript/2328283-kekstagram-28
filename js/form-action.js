const SCALE_STEP = 25;
const MIN_SCALET = 25;
const MAX_SCALET = 100;
const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleImput = document.querySelector('.scale__control--value');
const imgElements = document.querySelector('.img-upload__preview img');
const zoomImg = (value)=>{
  imgElements.style.transform = `scale(${value / 100})`;
  scaleImput.value = `${value}%`;
};
const onBigger = () => {
  const currentValue = parseInt(scaleImput.value,10);
  let newValue = currentValue + SCALE_STEP;
  if(newValue > MAX_SCALET){
    newValue = MAX_SCALET;
  }
  zoomImg(newValue);
};
const onLower = () => {
  const currentValue = parseInt(scaleImput.value,10);
  let newValue = currentValue - SCALE_STEP;
  if(newValue < MIN_SCALET){
    newValue = MIN_SCALET;
  }
  zoomImg(newValue);
};
biggerButton.addEventListener('click',onBigger);
smallerButton.addEventListener('click',onLower);

export {scaleImput,imgElements};
