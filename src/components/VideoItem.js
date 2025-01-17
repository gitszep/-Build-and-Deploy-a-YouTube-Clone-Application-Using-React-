import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <Grid item xs={12}>
            <Paper 
                style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', padding: '10px' }} 
                onClick={() => onVideoSelect(video)}
            >
                <img style={{ marginRight: '20px', maxWidth: '100%', height: 'auto' }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
                <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem;
