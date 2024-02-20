import axios from "axios";

const postsTodosApi = "https://jsonplaceholder.typicode.com";
const instance = axios.create({ baseURL: postsTodosApi });

export const getPostsTodos = async (resource) => {
  try {
    const { data } = await instance.get(`/${resource}`);
    return data;
  } catch (error) {
    throw new Error(`Failed to get posts and todos: ${error.message}`);
  }
};
