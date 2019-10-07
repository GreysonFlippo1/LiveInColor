import React from 'react';

export default function Card(props){
    return(
        <>
        {
            props.video?(
            <a href={`https://www.youtube.com/watch?v=${props.video.snippet.resourceId.videoId}`} target="_blank" rel="noopener noreferrer">
                <div className="cards">
                    <div className="thumbnail" style={{backgroundImage:`url(${props.video.snippet.thumbnails.medium.url})`}} />
                    <div className="card_title">{props.video.snippet.title}</div>
                    <div className="card_description">{props.video.snippet.description}</div>
                    <div className="card_owner">LiveInColor Media</div>
                </div>
            </a>
            ):
            <></>
        }
        </>
    )
}