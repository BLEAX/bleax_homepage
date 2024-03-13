import "./App.css";

class Subject extends Component { //컴포넌트 함수
  render() {  //
    return (
      <header>
        <h1>how to use react component</h1>
      </header>
    );
  }
}

class App extends Component {
  render() {
    return ( 
    <div className='App'>
      <Subject></Subject>
    </div>
    );
  }
}

export default App;