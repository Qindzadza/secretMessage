let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
//Use an array method to remove the last string of the array secretMessage.
console.log(secretMessage.pop());
// console.log(secretMessage)
// console.log(secretMessage.length)
// Use an array method to add the words to and Program as separate strings to the end of the secretMessage array.
secretMessage.push("to","Program");
// console.log(secretMessage)
// Change the word easily to the word right by accessing the index and replacing it.
console.log(secretMessage.indexOf("easily"));
secretMessage[7]="right";
// console.log(secretMessage)
// Use an array method to remove the first string of the array.
console.log(secretMessage.shift());
// Use an array method to add the string Programming to the beginning of the array.
console.log(secretMessage.unshift("Programming"));
// console.log(secretMessage);
// Use an array method to remove the strings get, right, the, first, time,, and replace them with the single string know,.
console.log(secretMessage.splice(7,4,"know"));
console.log(secretMessage.join(" "));




