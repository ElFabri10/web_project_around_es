const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];


const modal = document.querySelector("#edit-popup");
const editarProfile = document.querySelector(".profile__edit-button");
const container = document.querySelector(".cards__list");
const cierreModal = modal.querySelector(".popup__close");
const inputName = document.querySelector(
  ".popup__input.popup__input_type_name",
);
const inputDescription = document.querySelector(
  ".popup__input.popup__input_type_description",
);


const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
let formElement = document.querySelector(".popup__form");
const addCard = document.querySelector(".profile__add-button");
const popup_Open_Close = document.querySelector("#new-card-popup");
const cerrarNuevaTarjeta = popup_Open_Close.querySelector(".popup__close");
let cardFormElement = document.querySelector("#new-card-form");

const userPopup = document.querySelector("#image-popup");
const popupImg = userPopup.querySelector(".popup__image");
const popupCaption = userPopup.querySelector(".popup__caption");
const popupClose = userPopup.querySelector(".popup__close");




function openModal(modal) {
  modal.classList.add("popup_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

function fillProfileForm() {
  inputName.value = profileTitle.textContent;
  inputDescription.value = profileDescription.textContent;
}

function handleOpenEditModal() {
  fillProfileForm();
  openModal(modal);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  let nameInput = document.querySelector(".popup__input_type_name");
  let jobInput = document.querySelector(".popup__input_type_description");
  let nameValue = nameInput.value;
  let jobValue = jobInput.value;
  let profileTitle = document.querySelector(".profile__title");
  let profileDescription = document.querySelector(".profile__description");
  profileTitle.textContent = nameValue;
  profileDescription.textContent = jobValue;
  closeModal(modal);
}

function handleCardFormSubmit(evt){
  evt.preventDefault();
  let nameInput = document.querySelector(".popup__input.popup__input_type_card-name");
  let urlInput = document.querySelector(".popup__input.popup__input_type_url");
  let nameValue = nameInput.value;
  let urlValue = urlInput.value;
  renderCard(nameValue, urlValue, container);
  nameInput.value = "";
  urlInput.value = "";
  closeModal(popup_Open_Close);
}

function getCardElement({name = "Sin título" , link = "./images/placeholder.jpg"} = {}) {
  const cardTemplate = document.querySelector("#card-template");
  const newCardTemplate = cardTemplate.content.cloneNode(true);
  const cardElement = newCardTemplate.querySelector(".card");
  const titulo = newCardTemplate.querySelector(".card__title");
  const imagen = newCardTemplate.querySelector(".card__image");

  const likeButton = newCardTemplate.querySelector(".card__like-button");
  const eliminarButton = newCardTemplate.querySelector(".card__delete-button");
 
  titulo.textContent = name;
  imagen.src = link;

  imagen.addEventListener("click", () => {
    popupImg.src = link;
    popupImg.alt = imagen.alt;
    popupCaption.textContent = name;
    openModal(userPopup);
  });

  popupClose.addEventListener("click", () => {
    closeModal(userPopup);
  });

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_is-active");
  });

  eliminarButton.addEventListener("click", () => {
    cardElement.remove();
  });

  
  return newCardTemplate;
  
}

function renderCard(name, link, container){
  const cardElement = getCardElement({name: name, link: link});
  container.prepend(cardElement);
  }



  initialCards.forEach((card) => {
  renderCard(card.name, card.link, container);
});


formElement.addEventListener("submit", handleProfileFormSubmit);

editarProfile.addEventListener("click", () => {
  handleOpenEditModal();
});

cierreModal.addEventListener("click", () => {
  closeModal(modal);
});

addCard.addEventListener("click", () => {
  openModal(popup_Open_Close);
});


cerrarNuevaTarjeta.addEventListener("click", () =>{
  closeModal(popup_Open_Close);
});

cardFormElement.addEventListener("submit", handleCardFormSubmit);

