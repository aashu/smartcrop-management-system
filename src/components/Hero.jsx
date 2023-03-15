import React from 'react'
import Card from './Card'
import MiniCard from './MiniCard'
import data from '../data'
const Hero = () => {
  const CardsGroup = data.cards.map((card, index) => {
    return (
      <Card key={index} cardData={card}/>
    )
  })
  const miniCardsGroup = data.miniCards.map((miniCard, index) => <MiniCard name={miniCard.name} value={miniCard.value} key={index}/>)
  return (
    <>
    <div className='hero h-[90%]'>
      <div className='row'>
        {CardsGroup}
      </div>
      <div className='row'>
        {miniCardsGroup}
      </div>
    </div>
    </>
  )
}

export default Hero