import httpClient from '../http-client';

import {IDiscoverQuery} from './discover.interface';

export const BASE_ENDPOINT: string = '/discover/movie';
export const UPCOMING_ENDPOINT: string = '/movie/upcoming';
export const SEARCH_ENDPOINT: string = '/search/movie';

export class Discover {
  public discoverMovies(queryParams?: IDiscoverQuery) {
    return httpClient.get(BASE_ENDPOINT, queryParams || {});
  }

  public getUpcomingMovies(queryParams?: IDiscoverQuery) {
    return httpClient.get(UPCOMING_ENDPOINT, queryParams || {});
  }

  public serachMovies(queryParams: {
    include_adult: boolean;
    language: string;
    query: any;
  }) {
    return httpClient.get(SEARCH_ENDPOINT, queryParams || {});
  }
}

export default new Discover();
