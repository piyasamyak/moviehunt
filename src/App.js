import { useEffect } from "react";

const API_URL = "https://www.omdbapi.com?apikey=5ddb805&";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    searchMovies("Harry Potter");
  }, []);

  return <h1>App</h1>;
};

export default App;
