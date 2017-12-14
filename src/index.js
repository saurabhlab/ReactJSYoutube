import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YoutubeSearch from 'youtube-api-search';
import VideoList from './component/VideoList';
import VideoDetail from './component/VideoDetail'
import SearchBar from './component/SearchBar'
import _ from 'lodash';

//const API="AIzaSyAYeZcWlT3b_51QdKpOM9W0g5DL9XlIcfo";
 const API_KEY='AIzaSyDQ2Qs4bH_SMZeQc5TWSnx4putEmwH8AWg'
class MyYouTube extends Component{
constructor(props){
                  super(props);

                  this.state={videos: [],
                     selectedVideo: null
                    };
                  this.videoSearch('Bootstrap');      
                       

                }
           videoSearch(term) {
                YoutubeSearch({key:API_KEY,term:term},(videos)=>{
                          this.setState({videos:videos,
                                selectedVideo: videos[0]
                            });
                          //console.log(videos);
                        });
}
    render(){
      const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
      return(
          <div className="row">
            <div className="col-lg-12">

              <div className="panal-primary">
                <SearchBar onSearchTermChange={videoSearch} />
                    <VideoDetail video={this.state.selectedVideo} />
              <VideoList 
              onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
              videos={this.state.videos}/>
        
            </div>
            </div>
         </div>
      );
}


}


ReactDOM.render(
  <MyYouTube />,
  document.getElementById('root')


);
