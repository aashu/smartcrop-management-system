import React from 'react'
import {CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts'

const Chart = ({xDataKey, yDataKey, data  = []}) => {
  return (
    <ResponsiveContainer width="100%" height="80%" minHeight="10px" minWidth="10px">
    <LineChart data={data}>
      <Line type="monotone" dataKey={yDataKey} stroke='#884d87'/>
      <CartesianGrid stroke='#ccc'/>
      <XAxis dataKey={xDataKey}/>
      <YAxis/>
      <Tooltip formatter={(value, name, props) => [`${parseFloat(value.toFixed(2))}`,`${name.toUpperCase()}`]}
        labelFormatter={(value, name, props)=> `Time: ${value}`}
      />
    </LineChart>
    </ResponsiveContainer>
  )
}

export default Chart