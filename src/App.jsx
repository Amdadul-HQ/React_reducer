import { useReducer } from "react"

const initialState = {
  name: "",
  age: "",
  email: ""
}

const reducer = (currentState, action) =>{
  switch(action.type){
    case "UPDATE_NAME":
      return {...currentState, name: action.payload}
    case "UPDATE_AGE":
      return {...currentState, age: action.payload}
    case "UPDATE_EMAIL":
      return {...currentState, email: action.payload}
    default:
      return currentState
  }
}
function App() {
  const [user,dispatch] = useReducer(reducer,initialState)
  console.log(user);
  return (
    <>
      <form>
      </form>
    </>
  )
}

export default App
