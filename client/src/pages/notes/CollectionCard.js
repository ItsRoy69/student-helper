import React from "react";
import "./CollectionCard.css";

export default function CollectionCard(props) {
  const { name, margin, flashcardAmount, className, idTag } = props;

  return (
    <div
      margin={margin}
      id={idTag}
      className={`${className} CollectionCard-card`}
    >
      <i className={`fas fa-vial fa-4x`} style={{ color: "#C73357" }}></i>
      <p className="CollectionCard-text">{name}</p>
      <p className="CollectionCard-lead">{`${flashcardAmount} flashcards`}</p>
    </div>
  );
}
