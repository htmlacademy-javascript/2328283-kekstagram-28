const countsLeng = (str,leng) => {
  if (str.length <= leng){
    return true;
  }else{
    return false;
  }
};
const checkPalindrome = (str) => {
  str = str.toLowerCase();
  const revers = str.split('').reverse().join('').toLowerCase();
  if (revers === str.toLowerCase()){
    return 'строка  является палиндромом';
  }else if (revers.replaceAll(' ','') === str.replaceAll(' ','')){
    return 'Это строка является паландромом';
  }else{
    return 'строка  не является палиндромом';
  }
};
const isNumber = (str) => {
  str = str.replace(/\D/g, '');
  str = parseInt(str,10);
  if (str === str){
    return `Результат: число ${str}`;
  }else{
    return NaN;
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
console.log(myPadStart('1', 2, '0'));
