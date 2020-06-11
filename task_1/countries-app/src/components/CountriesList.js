import React from 'react'
import Country from './Country'
import preloader  from '../images/loader.svg'

const CountriesList = (props) => {
  return (
      <div className="list-wrapper">
        { props.isFetching ? <img src={preloader} alt="preloader"/> : null}
        {
          props.countries.map((country, i) => {
            return (
              <Country key={i} country={country} />
            )
          })
      }
      </div>
  )
}

export default CountriesList;