import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
    params: { maxResults: "50" },
    headers: {
        // "X-RapidAPI-Key": "e35697e035msh418b806be8b5f94p1dd4f2jsn6144ed9436e6",
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
};
export const fetchFromApi = async (url) => {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    const { data } = response;
    return data;
};
