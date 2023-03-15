import React from 'react'
import Chart from './Chart'
import Info from './Info'

const miniCard = ({name,value}) => {
  return (
    <div className={`m-2 p-2 miniCard`}>
      <div className='miniInfo'>
        <p>{name}</p>
        <p>{value}</p>
    </div>
    </div>
  )
}

export default miniCard