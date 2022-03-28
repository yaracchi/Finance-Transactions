"use strict";
//access the DOM
//grab an anchor tag from index.html docuemnt
const anchor = document.querySelector('a');
if (anchor) { //test if not null
    console.log(anchor.href);
}
const form = document.querySelector('form');
const formElement = document.querySelector('.new-item-form'); //specify the class, give type as element not form
//case it to have a certain type we want to cast it to
//so can access all fucntions of form type
const formX = document.querySelector('.new-item-form'); //specify the class and give form type
//all children inside tag form
//console.log(form.children)
//get the input tag
const inputChild = document.querySelector('input');
console.log(inputChild);
