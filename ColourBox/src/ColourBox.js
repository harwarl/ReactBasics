import React from 'react'

const ColourBox = ({newColour, newHex, isDarkText, darkMode}) => {
  return (
    <section 
    className='colourBox' 
    style={{background: newColour,
        color: isDarkText? "#000": "#fff",
        borderColor: darkMode === "#fff"? '#000': "#fff"
    }}>

    <p>{newColour ? newColour: "Empty Value"}</p>
    <p>{newHex ? newHex: " "}</p>
    </section>
  )
}

ColourBox.defaultProps = {
    newColour: 'Empty Colour Value'
}

export default ColourBox