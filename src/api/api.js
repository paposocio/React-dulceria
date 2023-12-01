import axios from "axios";

const API_URL = "http://localhost:4500/";

//rutas y peticiones users
export function userLogin(data) {
  return axios.post(API_URL + "auth/login", data);
}

export function userRegister(data) {
  return axios.post(API_URL + "auth/register", data);
}

export function getProducts() {
  return axios.get(API_URL + "products");
}

export function registerProducts(data) {
  return axios.post(API_URL + "products/register",data);
}

export function deleteProducts(data) {
  return axios.delete(API_URL + "products/delete/"+data);
}
