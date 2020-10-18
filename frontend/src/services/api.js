import axio from 'axios';

const api = axio.create({
    baseURL: 'http://localhost:5000'
})

export default api; 