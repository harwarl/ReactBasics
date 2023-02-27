import React from 'react'
import colorNames from 'colornames' //had to check solution for this

const ColourForm = ({newColour, 
    setNewColour, 
    setNewHex, 
    isDarkText, 
    setIsDarkText}) => {
  return (
    <form 
    className='inputColour'
    onSubmit={(e) => e.preventDefault()}
    >
        <input 
        autoFocus
        className='input'
        type="text"
        id='colour'
        placeholder='Add colour Name'
        value={newColour}
        onChange={(e)=>{
            setNewColour(e.target.value)
            setNewHex(colorNames(e.target.value))
        }
        }
        />
        <button
        type='submit'
        onClick={()=>setIsDarkText(!isDarkText)}
        >
            Change Text Colour
        </button>
    </form>
  )
}

export default ColourForm