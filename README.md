# React Audio Player App

This is a simple React application for playing audio files with file upload functionality and a playlist.

## Features

- **File Upload:** Users can upload audio files (e.g., mp3).
- **Playlist:** Display a list of uploaded audio files.
- **Now Playing View:** Show information about the currently playing audio file.
- **Playback Control:** Users can play audio files from the playlist, and playback continues to the next file upon completion.
- **Persistence:** When the page is reloaded, the app loads the last playing audio file and continues playing from the last position.

## Getting Started

1. Clone the Repository
   git clone https://github.com/your-username/your-audio-player-app.git
   cd your-audio-player-app // navigate to the path 

2.Install Dependencies
   npm i or npm i
3.Run the Application
 npm start
 Open http://localhost:3000 in your browser to view the app.
 
 
 ## Folder Structure
1. src/: Contains the source code for the React app.
2. FileUpload.js: Component for file uploads.
3. Playlist.js: Component for displaying the playlist.
4. NowPlaying.js: Component for displaying the currently playing audio file.
5. AudioPlayer.js: Component for managing the HTML audio player.
6. App.js: Main component integrating other components.
7. public/: Contains public assets.
8. App.css: Styles for the app.
9. index.js: Entry point for the React app.
