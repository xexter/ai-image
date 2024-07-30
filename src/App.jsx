import React, { useState } from "react";
import SearchBar from "./Components/SearchBar";
import ImageGallery from "./Components/ImageGallery";
import './App.css';

const apikey = '1OJz6FbaW8xUDnF1wAfUUsv43CfmHH9csd50lucOtlo';

const App = () => {
  const [img, setImg] = useState("");
  const [res, setRes] = useState([]);

  const fetchRequest = async (query) => {
    if (!query) return;
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${apikey}`
    );
    const dataJ = await data.json();
    setRes(dataJ.results);
  };

  const handleSearch = (query) => {
    fetchRequest(query);
  };

  return (
    <div className="app-container">
      <SearchBar onSearch={handleSearch} />
      <ImageGallery images={res} />
    </div>
  );
};

export default App;