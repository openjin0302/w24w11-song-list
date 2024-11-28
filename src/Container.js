import { useState } from 'react'
import { FaStar } from 'react-icons/fa'


const Container = (props)  =>{
  const [lyricsExpanded, setLyricsExpanded] = useState(false)

  const toggleLyrics = () => {
    setLyricsExpanded(prevState => !prevState)
  }

    return(
      <>
        <div className="container">
        <img 
              src={`https://picsum.photos/600/150?random=${props.song.id}`} 
              alt={`랜덤 이미지 ${props.song.id}`}
              onClick={toggleLyrics}/>

          <a href={`https://www.youtube.com/results?search_query=${props.song.title}`}
          target="_blank"
          rel="noreferrer">
            <div className="song-title">
              {`${props.song.title} (${props.song.singer})`}
            </div>
            <div className="song-rating">
              {[...Array(props.song.rating)].map((_,index)=>(
                <FaStar key ={index}/>
              ))}
            </div>
          </a>
        </div>
        {props.song.lyrics && lyricsExpanded && (
          <pre className="song-lyrics" onClick={toggleLyrics}>
            {props.song.lyrics}
          </pre>
        )}
      </>
      최대한 예쁘게 만들기 , 노래는 주제로 하면 안됨
    )
  }

  export default Container