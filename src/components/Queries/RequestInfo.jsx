import axios from 'axios';
import {url} from './common';

export const SaveData = async data => {
    const response = await axios.post(`${url}/newData`, data);
    return response;
};

export const GetData = async () => {
    const response = await axios.get(`${url}/getData`);
    return response;
};

export const getPuntos = async obj => {
    const response = await axios.post(`${url}/obtenerPuntos`, obj);
    return response;
};

export const getClusters = async (data, clusters) => {
    const response = await axios.post(`${url}/obtenerClusters`, {data, clusters});
    return response;
};