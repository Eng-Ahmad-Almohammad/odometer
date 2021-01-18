import logo from './logo.svg';
import './App.css';
import React from 'react';



function Header(props) {
  return (
    <div className='App'>
      <h1>{props.text}</h1>
    </div>
  )
}

function Footer(props) {
  return (
    <div className='App'>
      <h1>{props.text}</h1>
    </div>
  )
}
class Odometer extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  adding(count, num) {


    if (count+num <= 9999) {
      this.setState({
        count: this.state.count + num
      })
    }
    else {
      this.setState({
        count: this.state.count+num - 10000
      })
    }
  }
  render() {
    return (
      <>
        <h1>{String(this.state.count).padStart(4, 0)}</h1>
        <button onClick={() => this.adding(this.state.count, 1)}>1</button>
        <button onClick={() => this.adding(this.state.count, 10)}>10</button>
        <button onClick={() => this.adding(this.state.count, 100)}>100</button>
        <button onClick={() => this.adding(this.state.count, 1000)}>1000</button>
      </>
    )
  }

}
function App() {
  return (
    <div className="App">
      <Header text="Hello from Header" />
      <Odometer />
      <Footer text="Hello from Footer" />
    </div>
  );
}

export default App;
