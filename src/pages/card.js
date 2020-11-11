import React, { useEffect, useState } from "react"
import Http from "./http"
// import React, { Component } from 'react';
import "./card.css"


const BASE_API_URL = "http://localhost:8000/devices"
const http =  new Http(BASE_API_URL)

export default function Card(props) {

  const [state,setState] = useState({})
  const {sensorId,sensorName, sensorStatus, sensorReading}  = props.props
  
  

  useEffect(()=>{
    setState({
      sensorId,
      sensorName,
      sensorStatus,
      sensorReading
    })
  },[])

  const submit = async (sensorId, status, method) => {
    try{
      console.log("button pressed")

      let  body
      if(method === 'GET'){
        body = null
      }else{
        body = {
          status
        }
      }

      const result = await http.request(`${method}`,`${sensorId}/`,body)

      const newStatus = {
        sensorId: result.id,
        sensorName: result.name,
        sensorStatus:result.status,
        sensorReading:result.reading
      }
      setState(newStatus)
      console.log(state)

    }catch(error){
      console.log(error)
    }
  }


  return <div className="card" >
    <div >
        {state.sensorName}
    </div>
    <div>
        Sensor Status : {state.sensorStatus}
    </div>
    <div>
        Sensor Reading : {state.sensorReading}
    </div>
      <button type="button" onClick={()=>submit(state.sensorId,'ON','PUT')}>ON</button>
      <button type="button" onClick={()=>submit(state.sensorId,'OFF','PUT')}>OFF</button>
      <button type="button" onClick={()=>submit(state.sensorId,null,'GET')}>REFRESH</button>
    </div>
  
}