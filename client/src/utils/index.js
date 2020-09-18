import axios from "axios";

export default {
   
    getData: function (data) {
        return axios.get('/api/data', data);
    }
    

};