/* eslint-disable no-unused-vars */
import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App () {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [latitud, setLatitud] = useState('')
  const [longitud, setLongitud] = useState('')
  // tODO const url = http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
  const urlBases = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=e1190e6a5bdacf8e46a5473ee0fb3f13`
  // Todo const url_location = https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}
  const urlLocation = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=e1190e6a5bdacf8e46a5473ee0fb3f13`

  const searchLocation = (event) => {
    console.log(location)
    if (event.key === 'Enter') {
      axios.get(urlBases).then(resp => {
        const { data } = resp
        setData(data)
        console.log(data)
        // setLatitud(response.data.data[0].lat)
        // setLongitud(response.data.data[0].lon)
        // console.log(latitud)
        // fetch(urlLocation)
        //   .then(resp => resp.json())
        //   .then(data => setData(data))
      }
      )
    }
    setLocation('')
  }

  return (
    <div className='app'>
      <div className='search'>
        <input
          onChange={event => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder='Enter Location'
          type='text'
        />
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>hola</p>
          </div>
          <div className='temperature'>
            hola
          </div>
          <div className='description'>
            <p>Sunny</p>
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            <p className='bold'>40 degrees</p>
            <p>Feels like</p>
          </div>
          <div className='humidity'>
            <p className='bold'>25%</p>
            <p>Humidity</p>
          </div>
          <div className='wind'>
            <p className='bold'>20km/h</p>
            <p>Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
