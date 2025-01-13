import { useEffect, useState } from "react"

const UseEffect = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    })
  }, [])

  return (
    <div>
      <h1>UseEffect</h1>
      <p>Window width: {width}</p>
      <p>Window height: {height}</p>
    </div>
  )
}

export default UseEffect;