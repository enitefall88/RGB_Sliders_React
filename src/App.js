import React, {useState} from "react"
import PT from "prop-types"

function rgbaToHex(red, green, blue) {
  red = red.toString(16)
  green= green.toString(16)
  blue = blue.toString(16)


  if (red.length == 1)
    red = "0" + red
  if (green.length == 1)
    green = "0" + green
  if (blue.length == 1)
    blue = "0" + blue


  return "#" + red + green + blue
}

function Slider({min, max, value, title, onChange}) { //{} - destructuring
 return <div>
    <label>
      <h4>{title}</h4>
      <strong></strong><br/>
      <input type="range" min={min} max={max} value={value}
            onChange={e => onChange(parseInt(e.target.value))}// we pass setRed here
             style={{width: "28rem"}}/>

 {value}
    </label>

   </div>
}

Slider.propTypes = {
  min: PT.number.isRequired,
  max: PT.number.isRequired,
  value: PT.number.isRequired,
  title: PT.string.isRequired,
  onChange: PT.func.isRequired
}

export default function App() {
  let [redValue, setRed] = useState(0)
  let [greenValue, setGreen] = useState(0)
  let [blueValue, setBlue]  = useState(0)

  let hexValue = rgbaToHex(redValue, greenValue, blueValue)
  console.log(hexValue)
  let decValue = [redValue," , ", blueValue, " , ", greenValue]

  return <div>
     <Slider min={0} max={255} value={redValue} onChange={setRed} title="Red"/>
     <Slider min={0} max={255} value={greenValue} onChange={setGreen} title="Green"/>
     <Slider min={0} max={255} value={blueValue} onChange={setBlue} title="Blue"/>
     <div>
      <h3>Hex</h3> <span className="badge badge-dark text-monospace">{hexValue}</span>
       <h3>Dec</h3><span className="badge badge-dark text-monospace">{decValue}</span>
      </div>
      <div className="border mt-3" style={{
        height: "300px",
       width: "300px",
        backgroundColor: `rgb(${redValue}, ${greenValue}, ${blueValue}, 1)`,
      }}>
      </div>
    </div>
}


