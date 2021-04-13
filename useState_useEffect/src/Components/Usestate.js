/* eslint-disable no-lone-blocks */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";

function Usestate() {
	const initialCount = 0;
	const [state, setState] = useState(initialCount);
	const [user, setUser] = useState({ firstName: "", lastName: "" });
	const [items, setItems] = useState([]);

	const incrementByFive = () => {
		for (let i = 0; i < 5; i++) {
			setState((prevState) => prevState + 1);
		}
	};

	const addItems = () => {
		setItems([
			...items,
			{
				id: items.length,
				value: Math.floor(Math.random() * 10) + 1,
			},
		]);
	};

	return (
		<>
			<div>
				Count: {state}
				<button onClick={() => setState(state + 1)}>Increment Counter</button>
				<button onClick={() => setState(initialCount)}>Reset Counter</button>
				<button
					onClick={() =>
						state <= 0 ? setState(initialCount) : setState(state - 1)
					}
				>
					Decrement Counter
				</button>
				<button onClick={incrementByFive}>Increment By 5</button>
			</div>
			{/*usestate with Object */}
			<form>
				<input
					type="text"
					value={user.firstName}
					onChange={(e) => setUser({ ...user, firstName: e.target.value })}
				/>
				<input
					type="text"
					value={user.lastName}
					onChange={(e) => setUser({ ...user, lastName: e.target.value })}
				/>
				<h2>Your First Name is: {user.firstName} </h2>
				<h2>Your Lastname Name is: {user.lastName} </h2>
				<h2>{JSON.stringify(user)} </h2>
			</form>
			{/*useState with arrays */}
			<div>
				<button onClick={addItems}>Add Numbers</button>
				<ul>
					{items.map((item) => (
						<li key={item.id}>{item.value}</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default Usestate;
