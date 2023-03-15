import React from 'react'

const Info = ({name, value}) => {
  return (
    <div className='info'>
        <p>{name}</p>
        <p>{value}</p>
    </div>
  )
}

export default Info