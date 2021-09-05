import React from 'react';
import './App.css';



class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      trackedCurrencies : [],
      value : '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    
      this.setState( {
        trackedCurrencies : this.state.trackedCurrencies.slice().concat([this.state.value + " "]),
        value: '',
      });

      e.preventDefault();
    
  }

  handleChange(e) {
    this.setState({
      value : e.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>
          Welcome to Crypto-Listener
        </h1>
        <div>
        <form onSubmit = {this.handleSubmit}>
            <label>
                Currency
                <input type = 'text' value = {this.state.value} onChange = {this.handleChange}/>
            </label>
            <input type='submit' value='Submit' />
        </form>
        </div>
        <div>
          {"Tracked Currencies:"}
          <div>{this.state.trackedCurrencies}</div>
          {"Number of tracked currencies:"}
          <div>{this.state.trackedCurrencies.length}</div>
        </div>
      </div>
    );
  }

}


export default App;
