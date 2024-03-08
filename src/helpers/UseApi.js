import { useEffect, useState } from "react";

const useApi = (url) => {
  // State to store the fetched data
  const [data, setData] = useState(null);

  // State to track the loading status
  const [loading, setLoading] = useState(false);

  // Function to fetch data from the API
  const fetchApi = () => {
    fetch(url)
      .then((response) => response.json())
      .then((jsonResponse) => {
        // Set loading to true when the data is received
        setLoading(true);
        // Store the fetched data in the state
        setData(jsonResponse.data);
        // Log the response for debugging purposes
        console.log(jsonResponse);
      })
      .catch((error) => console.log(error)); // Log any errors that occur
  };

  // Use the useEffect hook to fetch data when the component mounts or the URL changes
  useEffect(() => {
    fetchApi();
  }, [url]);

  // Return the loading state and fetched data
  return { loading, data };
};

// Export the custom hook
export default useApi;
