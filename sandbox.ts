const firstName = 'yara';
console.log(firstName)

//To obtain a NodeList of all of the <input> elements contained within the element "document"
const inputs = document.querySelectorAll('input')
console.log(inputs)

inputs.forEach(input => {
    console.log(input)
})