import React from 'react';
import './App.css';

import Currency_List from './Currency_List.js';



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

      
      
      if(is_valid_currency(this.state.value)) {
        this.setState( {
          trackedCurrencies : this.state.trackedCurrencies.slice().concat([this.state.value]),
          value: '',
        });
      } else{
        this.setState( {
          value: '',
        });
        alert('Please enter a valid crypto-currency');
      }  

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
        
        <form onSubmit = {this.handleSubmit}>
            <label>
                Currency
                <input type = 'text' value = {this.state.value} onChange = {this.handleChange}/>
            </label>
            <input type='submit' value='Submit' />
        </form>
        
        <div>
          <Currency_List list={this.state.trackedCurrencies}/>
        </div>
      
      </div>
    );
  }

}

//add condition to check if this.state.value is a valid crypto-currency
function is_valid_currency(currency) {
  return true;
}

export default App;
