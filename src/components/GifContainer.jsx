// Import React library
import React from "react";

// GifContainer component
const GifContainer = ({ title, imageUrl }) => {
  return (
    <div className="image-container">
      <img src={imageUrl} alt={title} />
    </div>
  );
};

// Export the component
export default GifContainer;
