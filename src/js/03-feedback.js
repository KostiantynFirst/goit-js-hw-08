import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    email: document.querySelector('.feedback-form input[name="email"]')
}

fillTextareaInput();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));


function onFormSubmit(e) {
    e.preventDefault();

    // console.log("Kalush Orcestra");
    e.target.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);

}

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    // console.log(formData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function fillTextareaInput() {
    const saveInputValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
   
      if (saveInputValue === null) {
       return
    }

    refs.textarea.value = saveInputValue['message'] ? saveInputValue['message'] : "";
    refs.email.value = saveInputValue['email'] ? saveInputValue['email'] : "";
    
    formData.message = refs.textarea.value;
    formData.email = refs.email.value;
   
    
    //  console.log(JSON.stringify(formData));
    
    // if (saveInputValue['message']) {
    //     localStorage.setItem(STORAGE_KEY, JSON.stringify(saveInputValue));
    // }

    // if (saveInputValue['email']) {
    //     localStorage.setItem(STORAGE_KEY, JSON.stringify(saveInputValue));
    // }

}




