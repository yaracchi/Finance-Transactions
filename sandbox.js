var firstName = 'yara';
console.log(firstName);
//To obtain a NodeList of all of the <input> elements contained within the element "document"
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
