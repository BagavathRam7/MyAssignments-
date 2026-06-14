function getLastWordLength(text){

    let words= text.trim().split(" ");
    let secondword =  words[words.length-1];
    let lengthoflastword = secondword.length;

console.log("words:",words);
console.log("lengthoflastword:",lengthoflastword);

return lengthoflastword;
}
getLastWordLength(" fly me to the moon ");