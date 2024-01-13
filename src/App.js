import { useState } from "react";
import getPostsTodos from "./api";
import "./App.css";

const App = () => {
  const [titles, setTitles] = useState([]);

  const fetchPostsTodos = (resource) => {
    getPostsTodos(resource)
      .then((data) => setTitles(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <button onClick={() => fetchPostsTodos("posts")}>Posts</button>
      <button onClick={() => fetchPostsTodos("todos")}>Todos</button>

      <div className="App-list">
        <h3>Data</h3>

        <ol>
          {titles.map((title, id) => (
            <li key={id}>{title.title}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default App;
