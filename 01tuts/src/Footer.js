import React from 'react'

const Footer = ({length}) => {
  return (
    <p>
        {length > 0 ? (
            <p>{length} List { length === 1? 'Item': 'Items'}</p>
        ): (
            <p>No Items</p>
        )}
    </p>
  )
}

export default Footer