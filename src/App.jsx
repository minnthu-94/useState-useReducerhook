import { useReducer } from 'react'
import './App.css'

const firstReducer = (state,action) => {
  switch (action.type) {
    case "minus":
      return {...state,count: state.count - 1}
    case "plus":
      return {...state, count: state.count + 1}
    case "updateKey":
      return {...state, key: action.payload}
      default:
      throw new Error();
  }
}

// eslint-disable-next-line no-unused-vars
const ACTION = {
  PLUS : 'plus',
  MINUS : 'minus',
  UPDATE_KEY : "updateKey"
}

function App() {
  const [state,dispatch] = useReducer(firstReducer,{key:"",count:0})
  return (
    <>
      <input
        type="text"
        onChange={(e)=>
          dispatch({type:ACTION.UPDATE_KEY,payload: e.target.value})
        }
      />
      <h1>Your key is - {state.key}</h1>

      <button onClick={() => dispatch({ type: ACTION.MINUS })}>-</button>
      <span>{state.count}</span>

      <button onClick={() => dispatch({ type: ACTION.PLUS })}>+</button>
    </>
  );
}

export default App
