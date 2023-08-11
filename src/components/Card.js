import React from "react";

function Card(card, onCardClick) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="gallery__card">
      <img className="gallery__image" onClick={handleClick} src={card.link} alt={card.name}/>
      <div className="gallery__image-info">
        <h2 className="gallery__title">
          {card.name}
        </h2>
        <div className="gallery__like-container">
          <button className="gallery__like" type="button">

          </button>
          <span className="gallery__like-count">
                  {card.likes.length}
          </span>
        </div>
      </div>
      <button className="gallery__delete-btn" type="button">

      </button>
    </div>
  );
}

export default Card
