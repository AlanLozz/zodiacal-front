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