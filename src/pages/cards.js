import React from "react"

import Card from './card'

export default function Cards(props) {

  const displaySensorCards = (sensorReadings)=>{

    let cards = []
    

    sensorReadings.forEach(sensor=> {
      console.log(sensor.reading, "READING", `Sensor id ${sensor.id}`)
      const properties = {
        sensorId : sensor.id,
        sensorName : sensor.name,
        sensorReading : sensor.reading,
        sensorStatus : sensor.status,
      }

      cards.push(<Card key={properties.sensorId} props={properties}/>)

    });

    return cards
  }

  console.log(props, "PROPS")


  return (
    <div>
      {displaySensorCards(props.sensorReadings)}
    </div>
      )
  
}
