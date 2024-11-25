import './App.css';
import Container from './Container';

const App = () => {

  const songs = [
    "리와인드",
    "슈퍼노바",
    "사건의 지평선",
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
        props.listsong.map((song,index)=>(
         <Container key={index} title={song} index={index}/>
        ))
      }
    </div>
  )


}

export default App
