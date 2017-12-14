import React from 'react';


const VideoDetail=({video})=>{
    if(!video)
    {
        return <div>Processing...</div>
    }

    const videoId=video.id.videoId;
    const imgurl= `https://www.youtube.com/embed/${videoId}`;
    

    return(
        <div className="video-detail col-md-8">
             <div className="embed-responsive embed-responsive-16by9  " >
             

                <iframe className="embed-responsive-item" src={imgurl} ></iframe>
            </div><br/>
            <div className="details" 
         
style={{"border" : "2px solid gray","backgroundColor":"#4CAF50" ,"color":"white"}}


            >
                <div> <h4>Titile:</h4>{video.snippet.title}</div>
                <div> <h4>Description:</h4>{video.snippet.description}</div>
            </div>
      </div>
    )
}
export default VideoDetail;


