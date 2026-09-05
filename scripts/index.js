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

initialCards.forEach((card) => {
  console.log(card.name);
});

const modal = document.querySelector("#edit-popup");
const editarProfile = document.querySelector(".profile__edit-button");
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

formElement.addEventListener("submit", handleProfileFormSubmit);

editarProfile.addEventListener("click", () => {
  handleOpenEditModal();
});

cierreModal.addEventListener("click", () => {
  closeModal(modal);
});
