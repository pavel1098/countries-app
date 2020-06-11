import React from 'react';
import Header from './components/Header';
import CountriesList from './components/CountriesList';
import SideBar from './components/SideBar';

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      countries: [],
      isFetching: true,
      selectedRegion: null
    };
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(result => {
        this.setState({
          isFetching: false,
          countries: result
        });
      },
      (error) => {
        this.setState({
          isFetching: false,
          error
        });
      });
  }

  handleOptionChange = (event) => {
    this.setState({
      selectedRegion: event.target.value
    });
    console.log(event.target.value)
  }

  getCountriesByRegion = async (region) => {
    await fetch(`https://restcountries.eu/rest/v2/region/${region}`)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        this.setState({
          isFetching: false,
          countries: result
        });
      },
      (error) => {
        this.setState({
          isFetching: false,
          error
        });
      })
      console.log(this.state.selectedRegion)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SideBar handleOptionChange={this.handleOptionChange} getCountriesByRegion={this.getCountriesByRegion} selectedRegion={this.state.selectedRegion} />
        <CountriesList countries={this.state.countries} isFetching={this.state.isFetching}/>
      </div>
    );
  }
}

