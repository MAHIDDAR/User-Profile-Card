import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000";


export const getUsers = async () => {

  return axios.get(`${BASE_URL}/users`);

};


export const addUser = async (userData) => {

  return axios.post(`${BASE_URL}/users`, userData);

};


export const updateUser = async (id, userData) => {

  return axios.put(`${BASE_URL}/users/${id}`, userData);

};


export const deleteUser = async (id) => {

  return axios.delete(`${BASE_URL}/users/${id}`);

};