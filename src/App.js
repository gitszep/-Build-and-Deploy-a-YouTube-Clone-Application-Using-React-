import React from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    };

    componentDidMount(){
        this.handleSubmit('pdf generation with react and node');
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    handleSubmit = async (searchTerm) => {
        try {
            const response = await youtube.get('search', {
                params: {
                    part: 'snippet',
                    maxResults: 5,
                    key: 'AIzaSyCjE7mpuHW8RqDhCdbipGKjp59x-cKBszk', // Twój klucz API
                    q: searchTerm,
                },
            });

            this.setState({
                videos: response.data.items,
                selectedVideo: response.data.items[0], // Ustaw pierwsze wideo jako wybrane
            });
        } catch (error) {
            console.error("Error fetching data from YouTube API", error);
        }
    };

    render() {
        const { selectedVideo, videos } = this.state;
        return (
            <Grid container justify="center" style={{ width: '100%', overflowX: 'hidden' }}>
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default App;
