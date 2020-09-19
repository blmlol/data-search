import axios from "axios";

export default {

    getData: function (data) {
        return axios.get('/data', data);
    }


};