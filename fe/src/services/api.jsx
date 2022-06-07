const axios = require('axios').default;

export default axios.create({
    baseURL: 'http://localhost:5000'
});