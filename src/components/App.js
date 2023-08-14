import React, { useState }  from 'react';
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function closeAllPopups() {
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setSelectedCard({})
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  return (
    <div className="page">
      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onEditProfile={handleEditProfileClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm
        title={'Редактировать профиль'}
        name={'edit'}
        buttonText={'Сохранить'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <>
          <input
            type="text"
            className="popup__input"
            id="nameInput"
            name="name"
            value="Жак-Ив Кусто"
            placeholder="Ваше имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="popup__error nameInput-error" />
          <input
            type="text"
            className="popup__input"
            id="bioInput"
            name="bio"
            value="Исследователь океана"
            placeholder="Ваш род деятельности"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__error bioInput-error" />
        </>
      </PopupWithForm>

      <PopupWithForm
        title={'Обновить аватар'}
        name={'profile'}
        buttonText={'Обновить'}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <>
          <input
            type="url"
            className="popup__input"
            id="profileLinkInput"
            name="link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__error profileLinkInput-error" />
        </>
      </PopupWithForm>

      <PopupWithForm
        title={'Новое место'}
        name={'addPlace'}
        buttonText={'Добавить'}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <>
          <input
            type="text"
            className="popup__input"
            id="placeNameInput"
            name="name"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__error placeNameInput-error" />
          <input
            type="url"
            className="popup__input"
            id="placeLinkInput"
            name="link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__error placeLinkInput-error" />
        </>
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
