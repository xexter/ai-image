import React from "react";
import ImageCard from "./ImageCard";
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
  return (
    <div className="image-container">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageGallery;