import React from 'react'

const Country = (props) => {
  return (
    <div className="card">
      <div className="card-image">
        {
          props.country.flag == null 
          ? <img src="https://omegamma.com.au/wp-content/uploads/2017/04/default-image.jpg" alt="card image"/>
          : <img src={props.country.flag } />
        }
      </div>
      <div className="info">
      <div className='name'>
          <h2>{props.country.name}</h2>
        </div>
        <hr/>
        <div className="capital">
          <strong>Capital:</strong>  {props.country.capital}
        </div>
        <hr/>
        <div className="region">
        <strong>Region:</strong>  {props.country.region}
        </div>
        <hr/>
        <div className="population">
        <strong>Population:</strong> {props.country.population}
        </div>
        <hr/>
        <div className="timeZones">
        <strong>Timezones:</strong> {props.country.timezones.map((zone, key, arr) => {
            return  ((key < arr.length-1) ? `${zone}, ` : `${zone}`)
          })}
        </div>
        <hr/>
        <div className="currencies">
        <strong>Currencies:</strong> {props.country.currencies.map((currency, key, arr) => {
            return ((key < arr.length-1) ? `${currency.code} ${currency.symbol}, ` : `${currency.code} ${currency.symbol}`)
          })}
        </div>
        <hr/>
        <div className="translations">
        <strong>Translations:</strong>
          <li>de: {props.country.translations.de}</li>
          <li>es: {props.country.translations.es}</li>
          <li>it: {props.country.translations.it}</li>
        </div> 
      </div>
    </div>
  )
}

export default Country