import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-307fd.firebaseio.com/",
});

export default instance;
