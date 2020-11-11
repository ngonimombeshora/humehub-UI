import React, { useEffect, useState } from "react"

import Cards from './cards'
import Header from './header'
import Http from './http'

const BASE_API_URL = "http://localhost:8000/devices"
const http =  new Http(BASE_API_URL)

export default function Home() {

  const [sensors, setSensors] = useState([])
  const [sensorsLoaded, setSensorsLoaded] = useState(false)
 
  useEffect(()=> { 
    const fetchSensorData = async() =>{
      http.request('GET').then(resp => setSensors(resp.results))
    }

    fetchSensorData()
  },[sensorsLoaded])
 

  // console.log(sensors)
  console.log(sensors) 

    return (
    <div>
      <Header/>
      <Cards sensorReadings={sensors}/>
    </div>
      )
  
}
