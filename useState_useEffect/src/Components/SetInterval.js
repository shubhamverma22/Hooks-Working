import React, { useState, useEffect } from "react";

function SetInterval() {
	const [count, setCount] = useState(0);
	const tick = () => {
		setCount(count + 1);
	};
	useEffect(() => {
		const interval = setInterval(tick, 1000);

		//this is called clean up function
		return () => {
			clearInterval(interval);
		};
	}, [count]);
	return <div>{count}</div>;
}

export default SetInterval;
