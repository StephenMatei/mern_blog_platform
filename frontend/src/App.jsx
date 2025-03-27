import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "./config";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get(API_URL)
      .then((res) => setMessage(res.data))
      .catch((err) => console.error(err));
  }, []);

  return <h1>{message}</h1>;
}

export default App;
