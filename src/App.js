import logo from "./logo.svg";
import { useState, useEffect } from "react";

import Cards from "./components/Cards";
import Card from "./components/Card";
import API from "./API";
import "./App.css";
import { logRoles } from "@testing-library/dom";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentImgs, setCurrentImgs] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  const fetchImages = async (page, searchTerm = "") => {
    try {
      const imges = await API.fetchImages(searchTerm, page);
      setImages(imges);
      setCurrentImgs(imges.hits.slice(0, 8));
    } catch (err) {
      console.log("NOOO");
    }
    setLoading(false);
  };

  const addImages = () => {
    const index = currentImgs.length;
    console.log(index);
    const newImg = images.hits.slice(index, index + 8);
    setCurrentImgs(currentImgs.concat(newImg));
  };

  useEffect(() => {
    fetchImages(1);
  }, []);

  const checkClickedCards = (id) => {
    console.log("Hola");

    if (clickedCards.includes(id)) {
      lose();
    } else {
      setClickedCards(clickedCards.concat(id));
      const arr = currentImgs;
      arr.sort((a, b) => 0, 5 - Math.random())
      setCurrentImgs(arr);
    }
  };

  const nextRound = (id) => {
    setClickedCards(clickedCards.concat(id));

    shuffleCards();
  };

  const shuffleCards = () => {
    console.log("shuffleCards");
  };

  const lose = () => {
    alert("YPILOUSE");
  };

  return (
    <div className="App">
      <Cards>
        {loading
          ? "loading"
          : currentImgs.map((img) => (
              <Card
                key={img.id}
                img={img.webformatURL}
                onClick={checkClickedCards}
                id={img.id}
              />
            ))}
      </Cards>
      <button onClick={addImages}>ADD MORE</button>
    </div>
  );
}

export default App;
