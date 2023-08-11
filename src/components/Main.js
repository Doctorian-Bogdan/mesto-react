import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick
}) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  const [cards, setCards] = React.useState([]);

  const initialCards = cards.map((card) => {
    return new Card(card, onCardClick)
  })

  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setUserAvatar(res.avatar)
        setUserName(res.name)
        setUserDescription(res.about)
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      })

    api.getInitialCards()
      .then((cards) => {
        setCards(cards)
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      })
  }, [])

  return (
    <main>
      <section className="profile">
        <div className="profile__info">
          <div className="profile__picture-container">
            <img src={userAvatar} alt="аватар" className="profile__picture" />
            <div className="profile__picture-overlay" onClick={onEditAvatar}></div>
          </div>
          <div className="profile__about">
            <div className="profile__container">
              <h1 className="profile__name">{userName}</h1>
              <button className="profile__edit-btn" type="button" onClick={onEditProfile}></button>
            </div>
            <p className="profile__bio">{userDescription}</p>
          </div>
        </div>
        <button className="profile__button" type="button" onClick={onAddPlace}>

        </button>
      </section>
      <section className="gallery">
        {initialCards}
      </section>
    </main>
  );
}

export default Main
