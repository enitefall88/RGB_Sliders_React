import React, {useState} from "react"

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
            onChange={e=> onChange(parseInt(e.target.value))}
             style={{width: "39rem"}}/>

 {value}
    </label>

   </div>
}

export default function App() {
  let [redValue, setRed] = useState(0)
  let [greenValue, setGreen] = useState(0)
  let [blueValue, setBlue]  = useState(0)

  let hexValue = rgbaToHex(redValue, greenValue, blueValue)
  console.log(hexValue)

  return <div>
     <Slider min={0} max={255} value={redValue} onChange={setRed} title="Red"/>
     <Slider min={0} max={255} value={greenValue} onChange={setGreen} title="Green"/>
     <Slider min={0} max={255} value={blueValue} onChange={setBlue} title="Blue"/>
     <div>
       {hexValue}
      </div>
    </div>
}

// style = {{`height: ${height} {width: ${width}} {background-color: rgb(101, 104, 159)}`}>
