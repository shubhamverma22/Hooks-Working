import React, { useState, useEffect } from "react";
import UseEffects from "./UseEffects";

function useEffectToggle() {
	const [display, setDisplay] = useState(true);
	return (
		<div>
			<button onClick={() => setDisplay(!display)}>Toggle Display</button>
			{display && <useEffects />}
		</div>
	);
}

export default useEffectToggle;
