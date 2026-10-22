function checkInputValidity (inputElement) {
    const errorElement = document.querySelector(`#${inputElement.id}-error`);

    if (!inputElement.validity.valid){
         errorElement.classList.add("popup__error_visible");
         errorElement.textContent = inputElement.validationMessage;
         inputElement.classList.add("popup__input_type_error");
    }

    else  {
       errorElement.classList.remove("popup__error_visible");
       errorElement.textContent = "";
       inputElement.classList.remove("popup__input_type_error");
    }
    };

function setEventListeners(formElement){
    
    const Inputs = Array.from(formElement.querySelectorAll("input"));
    const ButtonValid = formElement.querySelector(".popup__button");

    Inputs.forEach (input => {
        input.addEventListener ("input", () => {
            checkInputValidity (input)
            toggleButtonState (Inputs, ButtonValid)
        });
      
    });
    toggleButtonState (Inputs, ButtonValid)
    }
   

 function toggleButtonState (Inputs, ButtonValid)   {
    const isValid = Inputs.every (input => input.validity.valid)

    if (isValid === true) {
      ButtonValid.classList.remove("popup__button_disabled");
      ButtonValid.disabled = false;
    }
    else {
        ButtonValid.classList.add("popup__button_disabled");
        ButtonValid.disabled = true;
    }
 }

 export function enableValidation() {
    const formList = document.querySelectorAll(".popup__form");

    formList.forEach((formElement) => {
        formElement.setAttribute("novalidate", "");
        setEventListeners(formElement);
    });
}

export function quitePopup(onClose) { 
  const popup = document.querySelectorAll(".popup");

  popup.forEach((popupElement) => {
    popupElement.addEventListener("click", (event) => {
      
      if (event.target.classList.contains("popup")) {
        onClose(popupElement); 
      }
    });
  });
}

export function quiteEsc (closeModal) {
 
      document.addEventListener("keydown", (event) => { 
        const openPopup = document.querySelector(".popup.popup_is-opened");
    if (event.key === "Escape" && openPopup) { 
     closeModal(openPopup);
  }
})
};