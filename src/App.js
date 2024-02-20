import { useState, useEffect } from "react";
import { getPostsTodos } from "./api/getPostsTodos";
import { PostsTodos } from "./components/PostsTodos/PostsTodos";
import "./App.css";

export const App = () => {
  const [titles, setTitles] = useState([]);

  const fetchPostsTodos = async (resource) => {
    const postsTodos = await getPostsTodos(resource);
    setTitles(postsTodos);
  };

  useEffect(() => {
    fetchPostsTodos("posts");
  }, []);

  return <PostsTodos titles={titles} fetchPostsTodos={fetchPostsTodos} />;
};
