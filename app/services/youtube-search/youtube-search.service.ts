import { Injectable, Inject } from 'angular2/core';
import { Http } from 'angular2/http';

const YOUTUBE_API_KEY = 'PLACE YOUTUBE API KEY HERE';
const YOUTUBE_API_URL = 'PLACE YOUTUBE API URL HERE';

@Injectable()
export class YoutubeSearchService {
	constructor(
		public http: Http,
		@Inject(YOUTUBE_API_KEY) private apiKey: string,
		@Inject(YOUTUBE_API_URL) private apiUrl: string) {

	}
}