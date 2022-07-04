import axios from "axios";

// let token = process.env.REACT_APP_ENDPOINT;

export default {

    state: {
        endpoint: "https://cashiet-server.herokuapp.com/api/v1",
        user: null,
        token: null
    },
    post(data){
        return  new Promise((resolve, reject) => {
            axios.post(this.state.endpoint + data.endpoint, data.details, {
                headers: { Authorization: 'Bearer ' + this.state.token,
                }
            })
            .then((data)=>{
                resolve(data);
            })
            .catch((error)=>{
                // context.dispatch('handleError', error);
                reject(error);
            })
        });
    },
    get(url){
        return new Promise((resolve, reject) => {
            axios.get(this.state.endpoint + url, {
                headers: {
                    Authorization: 'Bearer ' + this.state.token,
                },
            })
            .then((data)=>{
                resolve(data);
            })
            .catch((error)=>{
                reject(error);
            })
        });
    },

}