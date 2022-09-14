
const form = document.querySelector(`.feedback-form`);
const textarea = document.querySelector(`textarea`);
const input = document.querySelector(`input`);

let throttle = require('lodash.throttle');
const STORAGE_KEY = `feedback-form-state`;

wordTextarea();
wordForm();

form.addEventListener(`submit`, onButton);


form.addEventListener(`input`,  throttle(onFormWord, 500));

let formData = {};

function onFormWord(evn) {
    formData[evn.target.name] = evn.target.value;
 
    localStorage.setItem(STORAGE_KEY, JSON.stringify (formData))
}

function onButton(evn) {
    evn.preventDefault();
    console.log( JSON.parse(localStorage.getItem(STORAGE_KEY)))

    evn.currentTarget.reset();
   
    localStorage.removeItem(STORAGE_KEY);
    formData = {};
};

function wordTextarea(evn) {
    const takeMessage = localStorage.getItem(STORAGE_KEY);    
    
    if (takeMessage) {
        const messageJson = JSON.parse(takeMessage);
        textarea.value = messageJson.message;
       
    }   
    textarea.value = '';
};

function wordForm(evn) {
    const takeEmail = localStorage.getItem(STORAGE_KEY);
    
    if (takeEmail) {
        const emailJson = JSON.parse(takeEmail);
        input.value = emailJson.email;
      
    }
    input.value = '';
}