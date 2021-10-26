import logo from "./logo.svg";
import { useState, useEffect } from "react";

import Cards from "./components/Cards";

import API from "./API";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentImgs, setCurrentImgs] = useState([]);
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

  return (
    <div className="App">
      <Cards>
        {loading
          ? "loading"
          : currentImgs.map((img) => (
              <div key={img.id}>
                {" "}
                <img src={img.webformatURL} />
              </div>
            ))}
      </Cards>
      <button onClick={addImages}>ADD MORE</button>
    </div>
  );
}

export default App;
