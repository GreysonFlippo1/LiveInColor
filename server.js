const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

require('./Secrets.js');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const channelId = "UCh4NcC_WCUwCDCu5t2DuT5A";

app.get('/api/podcasts', async (req,res,next) => {
    try{    
        const key = process.env.YOUTUBE_API_KEY;
        const playlistId = "PLQ80Hi816F7MIpGy_YFszgGvnecvBTRyk";
        const {data} = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${key}`)
        res.send(data)
    }
    catch(e){
        console.log(e);
        res.send("Could not get playlist")
    }
});

app.get('/api/videos', async (req,res,next) => {
    try{    
        const key = process.env.YOUTUBE_API_KEY;
        const playlistId = "UUh4NcC_WCUwCDCu5t2DuT5A";
        const {data} = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${key}`)
        res.send(data)
    }
    catch(e){
        console.log(e);
        res.send("Could not get playlist")
    }
});

app.get('/api/music', async (req,res,next) => {
    try{    
        const key = process.env.YOUTUBE_API_KEY;
        const playlistId = "PLQ80Hi816F7M_jbTjABbHTzvdeM5bRqqk";
        const {data} = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${key}`)
        res.send(data)
    }
    catch(e){
        console.log(e);
        res.send("Could not get playlist")
    }
});



app.listen(port, () => console.log(`Listening on port ${port}`));