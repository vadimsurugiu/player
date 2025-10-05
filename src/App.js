import {useState, useRef} from 'react';
import './styles/app.scss';
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';
import data from './data'

function App() {
  const audioRef = useRef(null);
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [shouldPlay, setShouldPlay] = useState(false);
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({ ...songInfo, currentTime: current, duration, animationPercentage: animation });
  };

  const loadedMetadataHandler = () => {
    if (shouldPlay) {
      audioRef.current.play();
      setShouldPlay(false);
    }
  };
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) {
      setShouldPlay(true);
    }
  };
  return (
   <div className={`App ${libraryStatus ? 'library-active' : ""}`}>
    <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/> 
    <Song currentSong={currentSong} />    
    <Player 
      currentSong={currentSong} 
      isPlaying={isPlaying} 
      setIsPlaying={setIsPlaying}
      audioRef={audioRef}
      songInfo={songInfo}
      setSongInfo={setSongInfo}
      songs={songs}
      setSongs={setSongs}
      setCurrentSong={setCurrentSong}
    />
    <Library 
      audioRef={audioRef}
      songs={songs}
      setSongs={setSongs}
      setCurrentSong={setCurrentSong}
      isPlaying={isPlaying}
      libraryStatus={libraryStatus}
    />
    <audio
      onTimeUpdate={timeUpdateHandler}
      onLoadedMetadata={(e) => { timeUpdateHandler(e); loadedMetadataHandler(e); }}
      ref={audioRef}
      src={currentSong.audio}
      onEnded={songEndHandler}
    ></audio>
  </div>);
}

export default App;
