import './App.css';
import Container from './Container';

const App = () => {

  const songs = [
    {
      id: 1,
      title: "APT",
      singer: "로제 & 브루노 마스",
      rating: 4,
      lyrics: `채영이가 좋아하는
랜덤 게임
랜덤 게임
Game start
아파트, 아파트
아파트, 아파트
아파트, 아파트
Uh, uh-huh, uh-huh
아파트, 아파트
아파트, 아파트
아파트, 아파트
Uh, uh-huh, uh-huh
Kissy face, kissy face
Sent to your phone, but
I'm tryna kiss your lips for real (uh-huh, uh-huh)
Red hearts, red hearts
That's what I'm on, yeah
Come give me somethin' I can feel, oh-oh-oh`,
    },
    {
      id: 2,
      title: "사건의 지평선",
      singer: "윤하",
      rating: 5,
      lyrics: null,
    },
    {
      id: 3,
      title: "POWER",
      singer: "GDRAGON",
      rating: 4,
      lyrics: null,
    },
  ]


  return (
    <div>
      <Header/>
      <Playlist
        title = "프로그래밍하면서 듣고 싶은 노래"
        listsong = {songs}/>
    </div>
  )
}

const Header = () =>{
  return (
    <h1>React 프로그래밍</h1>
  )
}

const Playlist = props => {
  return (
    <div className='playlist'>
      <div className="playlist">{props.title}</div>
      {
        props.listsong.map(song=>(
          <Container key={song.id} song={song}/>
        ))
      }
    </div>
  )


}

export default App
