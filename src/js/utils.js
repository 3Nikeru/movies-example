import {API_KEY, API} from './constants';

export const generateUrls = path => `${API}${path}?api_key=${API_KEY}`