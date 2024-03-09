import React from "react";
import useApi from "../helpers/UseApi";
import GifContainer from "./GifContainer";

//  component ShowGifs
const ShowGifs = ({ category }) => {
  // URL for the Giphy API
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Mr9lGtrNcbHPECS47MF9ZsI0aDcgFRFO&q=${category}&limit=12`;

  // Use the custom hook useApi to fetch data from the API
  const { loading, data } = useApi(url);

  // Render the component
  return (
    <div className="container-gifs">
      {}
      {loading
        ? data.map((img) => (
            <GifContainer
              key={img.id}
              imageUrl={img.images.downsized_medium.url}
            />
          ))
        : ""}
    </div>
  );
};

// Export the ShowGifs component
export default ShowGifs;
