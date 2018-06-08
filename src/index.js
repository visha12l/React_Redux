import React from 'react';//get react from node modules and give me access here.we imported react as javascript module
import ReactDOM from 'react-dom';//react dom is needed to render the html dom
const API_KEY = 'AIzaSyAq5k4HnMgn7c0aGjwBGhaC_mohirFJeSA'; //youtube api key for aunthentication
import YTSearch from 'youtube-api-search';
import Searchbar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

export default class App extends React.Component {
    constructor() {
      super();
      this.state = {
        videos: [],
        selectedVideos: null,
      };
      this.selectVideo = this.selectVideo.bind(this);
      this.videoSearch('board'); //default search with board keyword
    }

    videoSearch(term) {
      YTSearch({
        key: API_KEY, term: term
      }, //data sent
        (data) => {  //callback function
          this.setState({
            videos: [...data],
            selectedVideos: data[0],
          });
        });
    }

    selectVideo(video) {
      this.setState({
        selectedVideos: video
      });
    }

    render() {
      const { videos, selectedVideos } = this.state;
      const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
      return (
        <div>
          <Searchbar onSearch={videoSearch} />
          <VideoDetail videos={selectedVideos} />
          <VideoList videos={videos} selectVideo={this.selectVideo} />
        </div>
      );
    }
}
ReactDOM.render(<App />, document.getElementById('container'));//take this html and put it on page
