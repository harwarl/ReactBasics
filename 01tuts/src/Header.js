import React from 'react'

const Header = ({title}) => {
  return (
    <header>
        <p>{title} </p>
    </header>
  )
}

Header.defaultProps = {  //set default props
    title: "Default Title"
}

export default Header