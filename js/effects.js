const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max:100,
    step:1,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max:1,
    step:0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max:1,
    step:0.1,
    unit: '',

  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max:100,
    step:1,
    unit:'%',
  },
  {
    name: 'fobos',
    style: 'blur',
    min: 0,
    max:3,
    step:0.1,
    unit:'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max:3,
    step:0.1,
    unit:'',
  },
];
const DEFOLT_EFFECT = EFFECTS[0];
let choseEffect = DEFOLT_EFFECT;
const imgElement = document.querySelector('.img-upload__preview img');
const effectsElement = document.querySelector('.effects');
const sliderElement = document.querySelector('.effect-level__slider');
const containerElemets = document.querySelector('.img-upload__effect-level ');
const effectLvlElement = document.querySelector('.effect-level__value');
const isDefolt = () => choseEffect === DEFOLT_EFFECT;
const showSlider = () =>{
  containerElemets.classList.remove('hidden');
};

const closeSlider = () =>{
  containerElemets.classList.add('hidden');
};

const updateSlider = () =>{
  sliderElement.noUiSlider.updateOptions({
    range :{
      min:choseEffect.min,
      max:choseEffect.max
    },
    step:choseEffect.step,
    start:choseEffect.max

  });
  if(isDefolt()){
    closeSlider();
  }else{
    showSlider();
  }
};

const onEffectsChange = (evt) =>{
  if(!evt.target.classList.contains('effects__radio')){
    return;
  }
  choseEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  imgElement.className = `effects__preview--${choseEffect.name}`;
  updateSlider();
};

const onSliderUpdate = () => {
  const sliderValue = sliderElement.noUiSlider.get();
  imgElement.style.filter = isDefolt()
    ? DEFOLT_EFFECT.style
    : `${choseEffect.style}(${sliderValue} ${choseEffect.unit})`;
  effectLvlElement.value = sliderValue;
};

const resetEffects = () =>{
  choseEffect = DEFOLT_EFFECT;
  updateSlider();
};

noUiSlider.create(sliderElement,{
  range:{
    min:DEFOLT_EFFECT.min,
    max:DEFOLT_EFFECT.max,
  },
  start:DEFOLT_EFFECT.max,
  step:DEFOLT_EFFECT.step,
  connect:'lower',
});

closeSlider();

effectsElement.addEventListener('change',onEffectsChange);
sliderElement.noUiSlider.on('update',onSliderUpdate);
export {resetEffects};
