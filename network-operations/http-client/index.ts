import {create} from 'apisauce';

import Config from '../../config';
import {AxiosRequestConfig} from 'axios';

const httpClient = create({
  baseURL: Config.MOVIE_DB_API_URL || process.env.MOVIE_DB_API_URL,
});

httpClient.addRequestTransform((request: AxiosRequestConfig) => {
  request.params['api_key'] = Config.MOVIE_DB_API_KEY;
});

export default httpClient;
