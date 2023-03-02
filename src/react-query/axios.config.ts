import axios from "axios";
import Cookies from 'js-cookie'

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_ENDPOINT,
  headers:{
    "Authorization": `Bearer ${Cookies.get("key")}`
  }
});

export default instance;
