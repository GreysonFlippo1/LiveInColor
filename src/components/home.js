import React from 'react';
import Nav from './Nav';
import Card from './card';

export default function Home(){

    return(
        <div className="home_page">
            <div className="logo_image" />
            <Nav />
            <Card />
        </div>
    )
}