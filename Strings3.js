function isAnagram(str1, str2) {

  str1 = str1.toLowerCase().replace(/\s+/g, '');
  str2 = str2.toLowerCase().replace(/\s+/g, '');

  if (str1.length !== str2.length) {
    return false;
  }
 
  let sortedStr1 = str1.split('').sort().join('');
  let sortedStr2 = str2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

console.log(isAnagram('hello', 'world')); 
console.log(isAnagram('listen', 'silent')); 
