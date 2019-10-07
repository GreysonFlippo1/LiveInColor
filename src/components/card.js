import React from 'react';

export default function Card(props){
    return(
        <div className="cards">
            <div className="thumbnail" />
            <div className="card_title">This Is A Title</div>
            <div className="card_description">This is a video description. I will need to make sure this text doesn't get out of hand and over flow the card space. This is a video description. I will need to make sure this text doesn't get out of hand and over flow the card space.</div>
            <div className="card_owner">LiveInColor Media</div>
        </div>
    )
}