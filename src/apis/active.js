import axios from 'axios';

export default axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://jhosehprendon.api-us1.com/api/3'
})