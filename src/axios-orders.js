import axios from "axios";

const instance = axios.create({
    baseURL: 'https://react-practice-1-abe5b-default-rtdb.firebaseio.com/'
})

export default instance