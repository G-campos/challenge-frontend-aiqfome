import Vue from "vue";
import axios from "axios";

axios.defaults.baseURL = "https://swapi.dev/api"

const http = {
  get(uri, params = { }) {
    return axios.get(uri, { params })
  },

  post(uri, params) {
    return axios.post(uri, params)
  },

  put(uri, params) {
    return axios.put(uri, params)
  },

  delete(uri, params) {
    return axios.delete(uri, { data: params })
  },
}

Vue.prototype.http = http

export default http
