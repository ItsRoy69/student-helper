import React, { useState } from "react";
import "./Slider.css";
import CollectionCard from "./CollectionCard";

const Collections = [
  {
    name: "Maths1",
    id: "1",
    flashcards: []
  },
  {
    name: "Testerrrr2",
    id: "12",
    flashcards: []
  },
  {
    name: "Chemistry3",
    id: "5",
    flashcards: []
  },
  {
    name: "Biology4",
    id: "6",
    flashcards: []
  },
  {
    name: "Science5",
    id: "21",
    flashcards: []
  },
  {
    name: "Gym6",
    id: "22",
    flashcards: []
  },
  {
    name: "Chemistry7",
    id: "23",
    flashcards: []
  },
  {
    name: "Phsyics8",
    id: "34",
    flashcards: []
  }
];

export default function App() {
  const [currentArray, setCurrentArray] = useState(Collections);
  const [shownCollections, setShownCollections] = useState(Collections);

  function generateNextArr(oldArr) {
    let newArray = oldArr;
    let lastElement = newArray.pop();
    newArray.unshift(lastElement);
    return newArray;
  }

  function generatePrevArr(oldArr) {
    let newArray = oldArr;
    let lastElement = newArray.shift();
    newArray.push(lastElement);
    return newArray;
  }

  function prevHandler() {
    const result = generatePrevArr(currentArray);
    setShownCollections(result.slice(0, 7));
    setCurrentArray(result);
  }

  function nextHandler() {
    const result = generateNextArr(currentArray);
    setShownCollections(result.slice(0, 7));
    setCurrentArray(result);
  }

  return (
    <>
      <div className="AuthHome-CollectionsRow">
        <div className="AuthHome-FadeOverlay AuthHome-FadeOverlayLeft"></div>
        <div className="AuthHome-FadeOverlay AuthHome-FadeOverlayRight"></div>
        {shownCollections.map((collection) => {
          return (
            <CollectionCard
              id={collection.id}
              key={collection.id}
              name={collection.name}
              icon={collection.icon}
              flashcardAmount="9"
            />
          );
        })}
      </div>
      <div className="AuthHome-red">
        <button1>
          <svg
            width="50"
            height="25"
            viewBox="0 0 122 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={prevHandler}
          >
            <path
              className="AuthHome-fill"
              d="M5.33279e-06 37.049L45.75 2.07245e-05L45.75 27.7867L122 27.7867L122 46.3112L45.75 46.3112L45.75 74.0979L5.33279e-06 37.049Z"
              fill="grey"
            />
          </svg>
        </button1>
        <button2>
          <svg
            width="50"
            height="25"
            viewBox="0 0 122 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "rotate(180deg)" }}
            onClick={nextHandler}
          >
            <path
              className="AuthHome-fill"
              d="M5.33279e-06 37.049L45.75 2.07245e-05L45.75 27.7867L122 27.7867L122 46.3112L45.75 46.3112L45.75 74.0979L5.33279e-06 37.049Z"
              fill="grey"
            />
          </svg>
        </button2>
      </div>
    </>
  );
}
