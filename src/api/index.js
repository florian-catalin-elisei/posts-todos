import axios from "axios";

const postsTodosApi = "https://jsonplaceholder.typicode.com";

const instance = axios.create({
  baseURL: postsTodosApi,
  timeout: 5000,
});

const getPostsTodos = async (resource) => {
  try {
    const response = await instance.get(`/${resource}`);
    const { data } = response;

    return data;
  } catch (error) {
    throw new Error(`Unable to fetch posts and todos: ${error.message}`);
  }
};

export default getPostsTodos;
