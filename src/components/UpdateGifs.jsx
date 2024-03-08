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

    setError(false); // Reset the error state to false
    setCategory(value); // Update the category in the parent component's state
    setValue(""); // Clear the input value
  };

  // Component rendering
  return (
    <>
      {/* Form to add a category */}
      <form onSubmit={searchGif}>
        <input
          type="text"
          placeholder="What do you want to look for?"
          onChange={(e) => setValue(e.target.value)} // Update the input value
          value={value} // Assign the state value to the input
        />
      </form>
      {/* Display an error message if the input is empty */}
      {error ? <p className="error">The field cannot be empty</p> : ""}
    </>
  );
};

// Export the component
export default UpdateGifs;
