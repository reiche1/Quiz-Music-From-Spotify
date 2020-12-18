import React, { useEffect } from 'react'
import ActivityPart from './ActivityPart'
import ListPart from './ListPart'
import { Accordion } from 'react-bootstrap'

const List = () => {

    useEffect(() => {
        window.history.replaceState({}, document.title, '/');
    }, []);

    return (
        <div className="container main">
            <h1>Pick a Playlist</h1>
            <Accordion defaultActiveKey="0">
                    <ActivityPart num="0" name="Activity Based Playlists" storage="activity_playlists" />
                    <ListPart num="1" name="Your Playlists" storage="user_playlists" url="https://api.spotify.com/v1/me/playlists" />
                    <ListPart num="2" name="Spotify Top Playlists" storage="top_playlists" url="https://api.spotify.com/v1/browse/categories/toplists/playlists" />
            </Accordion>
        </div>
    )
}

export default List