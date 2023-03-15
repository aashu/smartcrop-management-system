import React from 'react'
import Chart from './Chart'
import Info from './Info'

const Card = ({cardData}) => {
  return (
    <div className={`m-2 p-2 pl-0 card`}>
      <Info name={cardData.name} value={cardData.value}/>
      <Chart data={cardData.data} xDataKey={cardData.xDataKey} yDataKey={cardData.yDataKey}/>
    </div>
  )
}

export default Card