import axios from "axios";

const instance = axios.create({
    baseURL: "https://anime-facts-rest-api.herokuapp.com"
});

export default instance