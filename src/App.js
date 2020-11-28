import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountriesDetails from './components/CountriesDetails';
import axios from 'axios';

class App extends Component {
  state = {
    countries: []
  };

  componentDidMount() {
    axios
      .get('https://countries.tech-savvy.tech/countries')
      .then(response => {
        this.setState({ countries: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { countries } = this.state;

    return countries.length > 0 ? (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
          <Navbar />
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <CountriesList countries={countries} />
            <Switch>
    <Route exact path="/:cca3" render={(props) => <CountriesDetails {...props} countries={countries} />} />
            </Switch>
          </div>
        </div>
      </div>
    ) : (
      <p>Loading...</p>
    );
  }
}

export default App;
