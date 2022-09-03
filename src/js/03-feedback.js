
const form = document.querySelector(`.feedback-form`);
const textarea = document.querySelector(`textarea`);
// const buttonSubmit = document.querySelector(`button`);

// console.log(form)
// console.log(textarea)
// console.log(buttonSubmit)
wordTextarea();

form.addEventListener(`submit`, onButton);
textarea.addEventListener(`input`, onTextareaWord);
// buttonSubmit.addEventListener(`submit`, onButton);

// function onFormWord(evn) {
  
//   const valueForm = evn.target.value;
// //   localStorage.setItem(`feedback-form-state`, valueForm)
// console.log(valueForm)  
 
// }

function onTextareaWord(evn) {
    // evn.preventDefault();  
const valueTextarea = evn.target.value;
localStorage.setItem(`feedback-form-state`, valueTextarea)

console.log(valueTextarea)  
}

function onButton(evn) {
    evn.target.reset();
    localStorage.removeItem(`feedback-form-state`);
}

function wordTextarea(evn) {
    const takeMessage = localStorage.getItem(`feedback-form-state`);
    
    if (takeMessage) {
        textarea.value = takeMessage;
    }
   
}