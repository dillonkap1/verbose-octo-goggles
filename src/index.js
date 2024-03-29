import Card from "./scripts/Card.js";
import FormValidator from "./scripts/FormValidator.js";
import { openPopup, closePopup, handleKeyDown, openPopupProfile, closePopupImage } from "./scripts/utils.js";
import "./pages/index.css"

const buttonEdit = document.querySelector(".profile__button-edit");
const buttonAdd = document.querySelector(".profile__button-add");
const closeButtons = document.querySelectorAll(".popup__button-close");

const likeIcon = document.querySelectorAll(".card__like");
const likeIconDark = document.querySelectorAll(".card__like-dark");
const title = document.querySelector(".profile__name");
const subtitle =document.querySelector(".profile__text");
const nameInput = document.querySelector(".popup__input-name");
const textInput = document.querySelector(".popup__input-text");
const popupProfile = document.querySelector(".popup-edit");
const saveButton = document.querySelector(".popup__button-save");
const cardImage = document.querySelectorAll(".card__image");
const buttonCloseCard = document.querySelector(".popup__button-close-images")
const popupFormImage = document.querySelector(".popup-add");
const popupPreview = document.querySelector(".popup_preview_images");

const titleInput = document.querySelector(".popup__input-title");
const imageUrlInput = document.querySelector(".popup__input-image");
const createNewPlaceButton = document.querySelector(".popup__button-create");

import valleYosemite from "./images/valleYosemite.png"
import lagoLouise from "./images/lagoLouise.png"
import montanasCalvas from "./images/montanasCalvas.png"
import newYork from "./images/newyork.jpg"
import chicago from "./images/chicago.jpg"
import washington from "./images/Washington.jpg"


closeButtons.forEach(button => {
  button.addEventListener("click", (event) => {
    const popup = event.target.closest(".popup");
    closePopup(popup);
  });
});


function submitButtonProfile(e){
    e.preventDefault(); 
    
    title.textContent = nameInput.value;
    subtitle.textContent = textInput.value;
    popupProfile.classList.remove("popup_opened");
}

buttonEdit.addEventListener("click", () => openPopupProfile(popupProfile, title, nameInput, subtitle, textInput));
saveButton.addEventListener("click", submitButtonProfile);
buttonCloseCard.addEventListener("click", closePopupPreviewImage);
buttonAdd.addEventListener("click", () => openPopup(popupFormImage));

function openPopupImage() {
  popupFormImage.classList.add("popup_opened");
  document.addEventListener("keydown", handleKeyDown);
}

buttonAdd.addEventListener("click", openPopupImage);


function closePopupPreviewImage() {
  popupPreview.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleKeyDown);
}

  const initialCards = [
    {
      name: "Valle de Yosemite",
      link: valleYosemite
    },
    {
      name: "Lago Louise",
      link: lagoLouise
    },
    {
      name: "Montañas Calvas",
      link: montanasCalvas
    },
    {
      name: "New York",
      link: newYork
    },
    {
      name: "Chicago",
      link: chicago
    },
    {
      name: "Washington",
      link: washington
    }
  ];
  const elementContainer = document.querySelector(".elements");

  initialCards.forEach(cardData => {
    const card = new Card(cardData, '#cardTemplate');
    const cardElement = card.generateCard();
    elementContainer.insertBefore(cardElement, elementContainer.firstChild);
});

  const addButton = document.querySelector(".profile__button-add");
  const inputName = document.querySelector(".popup__input-title"); 
  const inputImageLink = document.querySelector(".popup__input-image");
  const createButton = document.querySelector(".popup__button-create")
  createButton.addEventListener("click", addNewCard);

  function addNewCard(e) {
    e.preventDefault();
    const cardData = {
      name: inputName.value,
      link : inputImageLink.value
    };

    const card = new Card(cardData, '#cardTemplate');

    const cardElement = card.generateCard();

    elementContainer.insertBefore(cardElement, elementContainer.firstChild);

    closePopupImage();
  }

  function closeAllPopups() {
    const allPopups = document.querySelectorAll(".popup");
  
    allPopups.forEach(popup => {
      if (popup.classList.contains("popup_opened")) {
        closePopup(popup);
      }
    });
  }

  const formValidationSettings = {
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button-save, .popup__button-create",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input-type-error",
    errorClass: "popup__error-visible"
  };
  
  const editProfileFormValidator = new FormValidator(formValidationSettings, document.querySelector(".popup-edit form"));
  editProfileFormValidator.enableValidation();
  
  const addCardFormValidator = new FormValidator(formValidationSettings, document.querySelector(".popup-add form"));
  addCardFormValidator.enableValidation();