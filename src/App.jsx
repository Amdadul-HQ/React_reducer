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
        <button className="px-3 py-2" type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
