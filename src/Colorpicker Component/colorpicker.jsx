import { useState } from "react";
import './colorpicker.css'


const ColorPicker = () => {

    const [color, setColor] = useState("#000000");
    const [toggleColor, setToggleColor] = useState(true)
    const handleTextColor = () => {
        setToggleColor(!toggleColor);
    }

    return (
        <div className="container">
            <h2>Color Picker</h2>
            <div className="color-container" style={{
                backgroundColor: color
            }} >
                <p style={{ color: toggleColor ? "#fff" : "#000" }}>Selected Color: {color}</p>
            </div>
            <label htmlFor="selectColor" style={{ color: toggleColor ? "#fff" : "#000" }}>Select a Color:</label>
            <input id="selectColor" type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            <button onClick={() => handleTextColor()}>Toggle Color</button>
        </div>
    )

}
export default ColorPicker;