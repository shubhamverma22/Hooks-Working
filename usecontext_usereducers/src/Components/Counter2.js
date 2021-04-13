//This is a perfect useCase of using state as a object in reducers
//By this example we can maintain both the state and action as Object
//By using action as an Object we are able to pass additional data to the reducer function
//By using state as an Object we are able to keep track of multiple state variable. Note:- Multiple variable in a single state object is suited whn we dealing with global states but right now we're dealing with local state
import React, { useReducer } from "react";

const initialState = {
	firstCounter: 0,
	secondCounter: 0,
};
const reducer = (state, action) => {
	switch (action.type) {
		case "increment":
			return { ...state, firstCounter: state.firstCounter + action.value };
		case "decrement":
			return { ...state, irstCounter: state.firstCounter - action.value };
		case "increment2":
			return { ...state, secondCounter: state.secondCounter + action.value };
		case "decrement2":
			return { ...state, secondCounter: state.secondCounter - action.value };
		case "reset":
			return initialState;
		default:
			return state;
	}
};

function Counter2() {
	const [count, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			<div> Count:- {count.firstCounter}</div>
			<div> Count:- {count.secondCounter}</div>
			<button onClick={() => dispatch({ type: "increment", value: 1 })}>
				Increment
			</button>
			<button onClick={() => dispatch({ type: "reset" })}>Reset</button>
			<button onClick={() => dispatch({ type: "decrement", value: 1 })}>
				Decrement
			</button>
			<button onClick={() => dispatch({ type: "increment2", value: 1 })}>
				Increment2
			</button>
			<button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
				Decrement2
			</button>
			<button onClick={() => dispatch({ type: "increment", value: 5 })}>
				IncrementBy5
			</button>
			<button onClick={() => dispatch({ type: "decrement", value: 5 })}>
				DecrementBy5
			</button>
		</div>
	);
}

export default Counter2;
