import axios from "axios";
const client = axios.create({
  baseURL: process.env.THEMOVIEDB_API_URL,
  params: { api_key: process.env.THEMOVIEDB_API_KEY },
});
export default client;
