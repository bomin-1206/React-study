import './App.css';
import MyTag from './components/MyTag';

function App() {
  return (
    <div className="App">
      <h1>시작</h1>
      <MyTag name="김길동" age={23} />
      <MyTag name="이길동" age={25} />
      <MyTag name="빅길동" age={21} />
    </div>
  );
}

export default App;
