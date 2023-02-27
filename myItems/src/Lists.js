import React from 'react'
import ListItem from './ListItem'

const Lists = ({data}) => {
  return (
    <ul style={{listStyleType: "circle"}}>
        {data.map((item)=>(
            <ListItem
            key={item.id}
            item={item}
            />
        ))}
    </ul>
  )
}

export default Lists