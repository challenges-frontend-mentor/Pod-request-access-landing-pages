const formDOMEL = document.getElementById("form");
const emailMessageDOMEL = document.getElementById("email-message");
const messages = {
  emailIsEmpty: "Oops! Please add your email",
  emailNotValid: "Oop! PLease check your email"
};

const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const handleForSubmit = (e) =>{
  const emailValue = formDOMEL.email.value;

  if(emailValue.trim() === "") {
    e.preventDefault();
    emailMessageDOMEL.textContent = messages.emailIsEmpty;
    emailMessageDOMEL.classList.add("form__error--message--is--visible");
    return;
  } 
  
  if(!emailRegex.test(emailValue)){
    e.preventDefault();
    emailMessageDOMEL.textContent = messages.emailNotValid;
    emailMessageDOMEL.classList.add("form__error--message--is--visible")
  }
}

const handleFormFocusin = (e) =>{
  e.target.parentElement.nextElementSibling.classList.remove("form__error--message--is--visible");
}

formDOMEL.addEventListener("submit", handleForSubmit);
formDOMEL.addEventListener("focusin", handleFormFocusin);