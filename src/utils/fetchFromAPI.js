import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '0a13eea310msh05b908c0d48042cp11462cjsn1d4dc2b46242',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async(url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data
}