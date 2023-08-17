import React, { useState, useEffect }  from 'react';
import api from "../utils/Api";
import Card from "./Card";

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick
}) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  const [cards, setCards] = useState([]);

  const initialCards = cards.map((card) => (
    <Card
      card={card}
      key={card._id}
      onCardClick={onCardClick}
    />
    ));

  useEffect(() => {
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
              <button className="profile__edit-btn" type="button" onClick={onEditProfile} />
            </div>
            <p className="profile__bio">{userDescription}</p>
          </div>
        </div>
        <button className="profile__button" type="button" onClick={onAddPlace} />
      </section>
      <section className="gallery">
        {initialCards}
      </section>
    </main>
  );
}

export default Main
