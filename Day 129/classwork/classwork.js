// components

// component ი არის ჯავასკრიპტის ფუნქცია რომელიც აბრუნებს JSX ის კოდს(ელემენტს)

// JSX ის კოდია მაგრამ იყოს აქ დავალებად ჩავაგდე საკლასოა

const Table = ({date}) => { // ან props
    return (
      <div className="TableDiv">
        <table className="Table">
          <tr>
            {
              date.map((value, index) => { // ან წინ დავუწერდი props
                return (
                  <td key={index}>{value}</td>
                );
              })
            }
          </tr>
        </table>
      </div>
    )
  }
  
export default Table;  // JSX ის კოდია მაგრამ იყოს აქ დავალებად ჩავაგდე საკლასოა




