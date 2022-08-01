import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false)
  const color = isOn ? "red" : "white"

  function handleClick(){
    setIsOn(!isOn)
  }

  return <button style = {{background: color}} onClick={handleClick}>{isOn ? 'On' : 'OFF'}</button>;
}

export default Toggle;