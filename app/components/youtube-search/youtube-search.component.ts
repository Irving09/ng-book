import { Component, bind } from 'angular2/core';

@Component({
    selector: 'youtube-search',
    template: `youtube-search component loaded`,
    providers: []
})
export class YoutubeSearch {
    constructor() {
        console.log('YoutubeSearch component loaded');
    }
}

export var youTubeServiceInjectables: Array<any> = [
	// bind(YouTubeService).toClass(YouTubeService),
	// bind(YOUTUBE_API_KEY).toValue(YOUTUBE_API_KEY),
	// bind(YOUTUBE_API_URL).toValue(YOUTUBE_API_URL)
];