import React from 'react'
import Card from './Card'
import MiniCard from './MiniCard'
import { useState, useEffect } from "react";
import transform from '../utils/transform'
const Hero = () => {
  const [data, setData] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
  useEffect(() => {
      const updateData = () => {
        fetch("https://api.thingspeak.com/channels/2062334/feed.json?results=24")
      .then((response) => {
        return response.json();
      })
      .then((actualData) => {
        setData(transform(actualData))
        
        setError(null);
      })
      .catch((err) => {
        console.log(err)
        setError(err.message);
        setData(null);
      })
      .finally(() => setLoading(false))
      }
      const id = setInterval(updateData, 5000)

      return () => clearInterval(id)
    },[]);
    

  return (
    <>
    <div className='hero h-[90%]'>
      <div className='row'>
        {data && data.cards.map((card, index) => {
      return (
        <Card key={index} cardData={card}/>
      )
    })}
      </div>
      <div className='row'>
        {data && data.miniCards.map((miniCard, index) => <MiniCard name={miniCard.name} value={miniCard.value} key={index}/>)}
      </div>
    </div>
    </>
  )
}

export default Hero