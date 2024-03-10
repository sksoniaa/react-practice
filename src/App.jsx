// props - read-only properties that are shared between components.
// A parent component can send data to a child component
// <Component key=value />

// propTypes - a mechanism that ensures that the passed value
// is of the correct  datatype
// age: PropTypes.number

// defaultProps - default values for props in case they are not passed
// from the parent component
// name: "Guest"
import List from "./List"

function App() {

  const fruits = [{id: 1,name: 'apple', calories: 95},
                  {id: 2,name: 'orange', calories: 45},
                  {id: 3,name: 'banana', calories: 105},
                  {id: 4,name: 'coconut', calories: 159},
                  {id: 5,name: 'pineapple', calories: 37}]

  const vegetables = [{id: 1,name: 'tomato', calories: 95},
                      {id: 2,name: 'cucumber', calories: 45},
                      {id: 3,name: 'potato', calories: 105},
                      {id: 4,name: 'carrot', calories: 159}]

  return (
    <>
    {fruits.length > 0 &&
    <List items={fruits} category="Fruits"/>}

    {vegetables.length > 0 &&
    <List items={vegetables} category="Vegetables"/>}

    </>
  )
}


export default App
