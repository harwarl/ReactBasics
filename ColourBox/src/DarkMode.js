import React from 'react'

const DarkMode = ({ handleDarkMode }) => {

    return (
        <button
        onClick={handleDarkMode}
        >
            Dark Mode
        </button>
    )
}

export default DarkMode