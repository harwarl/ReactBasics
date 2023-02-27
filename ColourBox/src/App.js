import ColourForm from "./ColourForm";
import ColourBox from "./ColourBox";
import DarkMode from "./DarkMode";
import { useState } from "react";

function App() {
  const [newColour, setNewColour] = useState('');
  const [newHex, setNewHex] = useState('');
  const [isDarkText, setIsDarkText] = useState('');
  const [darkMode, setDarkMode] = useState('#fff');

  const handleDarkMode = () =>{
    if (darkMode === '#fff') {setDarkMode("#000")}
    else if(darkMode === "#000") {setDarkMode("#fff")}
  }

  return (
    <div className="App"
    style={{background: darkMode}}
    >
        <ColourBox 
        newColour={ newColour }
        newHex={ newHex }
        isDarkText={isDarkText}
        darkMode={darkMode}
        />

        <ColourForm 
        newColour={ newColour }
        setNewColour= { setNewColour }
        setNewHex={setNewHex}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
        darkMode={darkMode}
        />

        <DarkMode 
        handleDarkMode={handleDarkMode}
        />

    </div>
  );
}

export default App;
