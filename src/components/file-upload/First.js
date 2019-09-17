import React, {Component} from 'react';
import {storage} from '../firebase';

class FileUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            url: '',
            progress: 0
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
  }
  
  handleChange = e => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      this.setState(() => ({file}));
    }
  }

  handleUpload = () => {
    const {file} = this.state;
    const uploadTask = storage.ref(`files/${file.name}`).put(file);
    uploadTask.on('state_changed', 
    (snapshot) => {
      // progrss function ....
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      this.setState({progress});
    }, 
    (error) => {
      // error function ....
      console.log(error);
    }, () => {
      // complete function ....
      storage.ref('files').child(file.name).getDownloadURL().then(url => {
        console.log(url);
        this.setState({url});
      })
    });
  }
  
  render() {    
    return (
      <div style={{marginTop: "30px"}}>
        <progress value={this.state.progress} max="100"/><br/><br/>
        <input type="file" onChange={this.handleChange}/>
        <button onClick={this.handleUpload}>Upload</button><br/><br/>
        {/* <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/> */}
      </div>
    )
  }
}

export default FileUpload;
