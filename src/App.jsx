// Imports useState hook from React
import { useState } from 'react';

//Creates color component, adds onClick property w/ anonymous function passed in,
//uses object deconstruction
const Color = ({color, setSelectedColor}) => { 
  return (
  <div 
  className={color}
  onClick={() => setSelectedColor(color)}
  ></div>
  );
};

//Creates picker parent component and children color components
const App = () => { 
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color = "red" setSelectedColor={setSelectedColor}/>
        <Color color = "yellow" setSelectedColor={setSelectedColor}/>
        <Color color = "blue" setSelectedColor={setSelectedColor}/>
      </div>
    </div>
  );
};

export default App;
