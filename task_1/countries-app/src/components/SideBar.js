import React from 'react'

const SideBar = (props) => {
  return (
    <div className='sidebar'>
      <h3 className="bar-item">Countries by region</h3>
      <form>
        <p><input type="radio" 
                  name='region' 
                  value='africa' 
                  checked={props.selectedRegion === 'africa'}
                  onChange={props.handleOptionChange} /> Africa</p>
        <p><input type="radio" 
                  name='region' 
                  value='americas' 
                  checked={props.selectedRegion === 'americas'}
                  onChange={props.handleOptionChange} /> Americas</p>
         <p><input type="radio" 
                  name='region' 
                  value='asia' 
                  checked={props.selectedRegion === 'asia'}
                  onChange={props.handleOptionChange} /> Asia</p>
          <p><input type="radio" 
                  name='region' 
                  value='europe' 
                  checked={props.selectedRegion === 'europe'}
                  onChange={props.handleOptionChange} /> Europe</p>
          <p><input type="radio" 
                  name='region' 
                  value='oceania' 
                  checked={props.selectedRegion === 'oceania'}
                  onChange={props.handleOptionChange} /> Oceania</p>
        <button className='btn' type='button' onClick={() => {props.getCountriesByRegion(props.selectedRegion)}}>Make your choice</button>
      </form>
    </div>
  )
}

export default SideBar;