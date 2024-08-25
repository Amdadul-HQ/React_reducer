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
  return (
    <>
      <form>
        <input 
          type="text" 
          value={user.name} 
          onChange={(e) => dispatch({type: "UPDATE_NAME", payload: e.target.value})} 
        />
        <input 
          type="number" 
          value={user.age} 
          onChange={(e) => dispatch({type: "UPDATE_AGE", payload: e.target.value})} 
        />
        <input 
          type="email" 
          value={user.email} 
          onChange={(e) => dispatch({type: "UPDATE_EMAIL", payload: e.target.value})} 
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
