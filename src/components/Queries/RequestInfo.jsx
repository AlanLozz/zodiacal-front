import axios from 'axios';
import {url} from './common';

export const SaveData = async data => {
    const response = await axios.post(`${url}/newData`, data);
    return response;
};