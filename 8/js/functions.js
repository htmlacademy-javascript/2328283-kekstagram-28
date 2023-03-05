const countsLeng = (str,leng) => {
  if (str.length <= leng){
    return true;
  }else{
    return false;
  }
};
const checkPalindrome = (str) => {
  str = str.toLowerCase().replaceAll(' ','');
  const revers = str.split('').reverse().join('');
  if (revers === str){
    return 'строка  является палиндромом';
  }else{
    return 'строка  не является палиндромом';
  }
};
const isNumber = (str) => {
  if(typeof str === 'number'){
    return str;
  }
  str = str.replace(/\D/g, '');
  str = parseInt(str,10);
  if (Number.isNaN(str)){
    return NaN;
  }else {
    return `Результат: число ${str}`;
  }
};
const myPadStart = (string, minLength, pad) => {
  let result = string;
  while (result.length < minLength) {
    const newResultLength = result. length + pad. length;
    const actualPad = newResultLength <= minLength ? pad :
      pad.slice(0, minLength - newResultLength) ;
    result = actualPad + result;
  }
  return result;
};

