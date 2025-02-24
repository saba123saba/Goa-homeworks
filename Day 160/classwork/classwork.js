// 1) შექმენით რეაქთის აპლიკაცია და გასტილეთ ორი ერთნაირი ღილაკი 2 სხვადასხვა გზით inline და style object ის სახით 

const ButtonStyle = () => {
  const Button = {
    color: 'red',
    backgroundColor: 'blue',
    fontSize: '20px',
  }
  
  return (
    <div>
      <button style={{ color: 'red', fontSize: '20px' }}>
        Click Me
      </button>

      <button style={Button}>
        Click Me
      </button>
    </div>
  )
}

export default ButtonStyle;

