import { library } from "@fortawesome/fontawesome-svg-core"
import LibrarySong from "./LibrarySong"

const Library = ({songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus}) => {
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''  }`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong 
                        song={song}
                        songs={songs}
                        setSongs={setSongs}
                        id={song.id}
                        key={song.id}
                        setCurrentSong={setCurrentSong}
                        audioRef={audioRef}
                        isPlaying={isPlaying}
                    />
                ))}
            </div>
        </div>
    )
}

export default Library