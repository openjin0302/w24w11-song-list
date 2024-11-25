import './App.css';
import Container from './Container';

const App = () => {
  return (
    <div>
      <Header/>
      <Playlist/>
      <Container title = "슈퍼노바" index = "1"/>
      <Container title = "보헤미안 랩소디" index = "2"/>
      <Container title = "리와인드" index ="3"/>
    </div>
  )
}

const Header = () =>{
  return (
    <h1>React 프로그래밍</h1>
  )
}

const Playlist = () =>{
  return (
    <div className="playlist">
      프로그래밍하면서 듣고 싶은 노래
    </div>
  )
}

export default App
