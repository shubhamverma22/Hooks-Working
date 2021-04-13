import React, { useState, useEffect } from "react";

function UseEffects() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("");

	const [X, setX] = useState(0);
	const [Y, setY] = useState(0);

	useEffect(() => {
		console.log("UseEffect- updating document Title");
		document.title = `You Clicked ${count} times`;
	}, [count]);

	const logMousePoint = (e) => {
		console.log("Mouse Event");
		setX(e.clientX);
		setY(e.clientY);
	};

	useEffect(() => {
		console.log("useEffect for Mousemove is called");
		window.addEventListener("mousemove", logMousePoint);

		//cleanup function
		return () => {
			console.log("Component Unmounting Code");
			window.removeEventListener("mousemove", logMousePoint);
		};
	}, []); //  this [] bracket mimic the behaviour of componentDidMount

	return (
		<div>
			<div>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<button onClick={() => setCount(count + 1)}>
					Counter: {count} times
				</button>
			</div>
			<div>
				Hooks X- {X} Y - {Y}
			</div>
		</div>
	);
}

export default UseEffects;
