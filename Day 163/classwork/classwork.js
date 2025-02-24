// Custom Hooks toggle Created (useLightMode)

import { useState } from "react"

const useLightMode = (initialState = false) => {
  const [lightMode, setLightMode] = useState(false);

  const toglle = () => {
    setLightMode(!lightMode);
  }

  return [lightMode, toglle];
}

export default useLightMode;


// use my Custom hooks (useLightMode)

// import useLightMode from "../hooks/useLightMode";

// const Component1 = () => {
//   const [lightMode, toglle] = useLightMode(false);

//   const background = {
//     margin: '0',
//     padding: '0',
//     boxSizing: 'border-box',
//     backgroundColor: lightMode ? 'orange' : 'white',
//   }

//   return(
//     <main style={{ ...background }}>
//       <button onClick={toglle}>Click Me</button>
//     </main>
//   )
// }

// export default Component1;