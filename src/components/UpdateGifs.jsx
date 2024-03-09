import React from "react";
import { useState } from "react";

//  component UpdateGifs
const UpdateGifs = ({ setCategory }) => {
  // State to store the input value
  const [value, setValue] = useState("");

  // State to handle the error when the input is empty
  const [error, setError] = useState(false);

  // Function to handle form submission
  const searchGif = (e) => {
    e.preventDefault(); // Prevent the default form behavior

    // Check if the input is empty
    if (value === "") {
      setError(true); // Set the error state to true
      return; // Exit the function
    }

    // Reset the error state to false
    setError(false);
    // Update the category in the parent component's state
    setCategory(value);
    // Clear the input value
    setValue("");
  };

  // Component rendering
  return (
    <>
      <form onSubmit={searchGif}>
        <input
          type="text"
          placeholder="What do you want to look for?"
          // Update the input value
          onChange={(e) => setValue(e.target.value)}
          // Assign the state value to the input
          value={value}
        />
      </form>
      {error ? <p className="error">The field cannot be empty</p> : ""}
    </>
  );
};

// Export the component
export default UpdateGifs;
