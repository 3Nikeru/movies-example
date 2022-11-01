import {API_KEY, API_URL,IMG_URL} from './constants';

export const generateApiUrls = path => `${API_URL}${path}?api_key=${API_KEY}`;
export const generateImageUrl = path => `${IMG_URL}${path}`;
export const convertDate = date => new Date(date).toDateString();
export const calculatePopularity = popularity => Math.round(popularity * 10);
export const generateTitle = str => str[0].toUpperCase() +str.slice(1);