import React from 'react';
import VideoListItem  from './VideoListItem';



const VideoList=(props)=>{
const videoItem=props.videos.map((video)=>{
     
    return(
       
        <VideoListItem 
      
        key={video.etag}
        
        onVideoSelect={props.onVideoSelect}
        
         video={video}/>
    );

});


    return (
    <ul
      
     className="col-md-4 list-group">
  
      
   {videoItem}
    
   
    </ul>
  );


}

export default VideoList;