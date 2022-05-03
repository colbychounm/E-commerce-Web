import axios from "../axios";

const handleLoginAPI = async (email, password) => {
    return await axios.post('/api/login', { email, password });
}


export { handleLoginAPI }