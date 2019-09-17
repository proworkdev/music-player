import React, { Component } from 'react';
import {storage} from '../firebase';
import ReactAudioPlayer from 'react-audio-player';
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import { options } from "./options"


const options = {
    audioLists: [
      {
        name: 'Yara',
        singer: 'Arijit Singh',
        musicSrc: 'https://firebasestorage.googleapis.com/v0/b/awesomeproject-1bb2b.appspot.com/o/images%2Fyara.mp3?alt=media&token=fd96b785-f87d-4456-bcb4-c222b7627416',
      }]
    }

class First extends Component {
    constructor (props){
        super(props)
        this.state = {
            url: '',
            list: [],
            playSong: options
        }
    }

    handlePlay = (link) => {
        console.log(link)
        storage.ref().child(link).getDownloadURL().then(url => {
            console.log(url);
            this.setState({url});
        })
    }

    handleList = () => {
        storage.ref().child('files').listAll().then((list) => {
            console.log(list.items);
            this.setState({list: list.items});
        })
    }

    render () {
        return (
            <div style={{marginTop: "30px"}}>
                <div>
                    <ReactAudioPlayer style={{width: "100%"}} src={this.state.url} loop={true} autoPlay controls />
                    <ReactJkMusicPlayer {...this.state.playSong} />
                </div>
                <div>
                    <button onClick={this.handleList}>All songs</button>
                    { this.state.list.map((songs, i)=> {
                        return <li key={`li${i}`} style={{cursor: "pointer"}} onClick={()=>this.handlePlay(songs.location.path)}>{songs.location.path}</li>})
                    }
                </div>
            </div>
        )
    }
}

export default First;
