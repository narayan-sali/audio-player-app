
import React, { useState, useEffect } from 'react';
import FileUpload from './components/FileUpoload.jsx';
import Playlist from './components/Playlist.jsx';
import NowPlaying from './components/NowPlaying.jsx';
import AudioPlayer from './components/AudioPlayer.jsx';
import './App.css';

const App = () => {
  const [files, setFiles] = useState([]);
  const [currentFileIndex, setCurrentFileIndex] = useState(0);

  const handleFileChange = (file) => {
    setFiles([...files, file]);
  };

  const handlePlay = (index) => {
    setCurrentFileIndex(index);
  };

  const handleEnded = () => {
    setCurrentFileIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    // Save currentFileIndex to localStorage or other storage mechanism
    // Load last playing audio file and currentFileIndex on page reload
    // Implement your own logic for storing and retrieving this information
  }, [currentFileIndex]);

  return (
    <div>
    <FileUpload onFileChange={handleFileChange} />
    <Playlist files={files} onPlay={handlePlay} />
    <NowPlaying currentFile={files[currentFileIndex]} />
    <AudioPlayer
      currentFile={files[currentFileIndex]}
      onEnded={handleEnded}
    />
  </div>
  );
};

export default App;
