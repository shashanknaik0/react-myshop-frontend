import axios from 'axios';
import {urls} from "../config/env-config";

const getCsrfToken=async()=>{
    const response = await axios({
        method: 'GET',
        url: `${urls.service}/csrf/`,
        withCredentials: true,
    })
    return response.data;
  }

const promiseWithErrorHandling = (promise) => {
    return promise.catch(err => {
        if (err.response && err.response.status === 500) {
            // noinspection JSCheckFunctionSignatures
            window.location.assign("/error");
        } else {
            throw err;
        }
    });
};


export default {
    post: async (path, payload) => {
        return promiseWithErrorHandling(axios({
            method: 'POST',
            url: `${urls.service}/${path}`,
            withCredentials: true,
            data:payload,
            headers:{
                'X-CSRFToken': await getCsrfToken()
            }
        }));
    },

    // postWithoutAuthentication: async (path, payload) => {
    //     return promiseWithErrorHandling(axios.post(`${urls.service}/${path}`, payload));
    // },


    // getWithoutAuthentication: async (path) => {
    //     return promiseWithErrorHandling(axios.get(`${urls.service}/${path}`));
    // },

    delete: async (path) => {
        return promiseWithErrorHandling(axios({
            method: 'DELETE',
            url: `${urls.service}/${path}`,
            withCredentials: true,
            headers:{
                'X-CSRFToken': await getCsrfToken()
            }
        }));
    },

    get: async (path) => {
        return promiseWithErrorHandling(axios({
            method: 'GET',
            url: `${urls.service}/${path}`,
            withCredentials: true
        }));
    },

};
