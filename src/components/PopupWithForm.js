function PopupWithForm({ title, name, children, isOpen, onClose }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`} id={`${name}Popup`}>
      <div className="popup__container">
        <h2 className="popup__title">
          {title}
        </h2>
        <form className="popup__form" id={`${name}Form`} noValidate>
          {children}
          <button className="popup__button" type="submit">
            Сохранить
          </button>
        </form>
        <button className="popup__close-button" id={`close${name}Popup`} type="button" onClick={onClose}>

        </button>
      </div>
    </div>
  );
}

export default PopupWithForm
