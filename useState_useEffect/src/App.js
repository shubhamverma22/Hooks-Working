import React from "react";
import Usestate from "./Components/Usestate";
//import UseEffects from "./Components/UseEffects";
import useEffectToggle from "./Components/useEffectToggle";
import SetInterval from "./Components/SetInterval";
import DataFetching from "./Components/DataFetching";
import SpecificDataFetching from "./Components/SpecificDataFetching";

function App() {
	return (
		<div>
			{/*<Usestate />
			<useEffectToggle />
			<SetInterval />
			<DataFetching />
			*/}
			<SpecificDataFetching />
		</div>
	);
}

export default App;
