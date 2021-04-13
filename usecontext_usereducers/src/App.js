import React from "react";
import "./App.css";
import ComponentC from "./Components/ComponentC";
import Counter1 from "./Components/Counter1";
import Counter2 from "./Components/Counter2";
import Counter3 from "./Components/Counter3";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
	return (
		<div className="App">
			<UserContext.Provider value={"Shubham"}>
				<ChannelContext.Provider value={"CodeEvoluation"}>
					<ComponentC />
				</ChannelContext.Provider>
			</UserContext.Provider>
			<Counter1 />
			<Counter2 />
			<Counter3 />
		</div>
	);
}

export default App;
