import React, { useContext } from "react";
//import ComponentE from "./ComponentE";
import { UserContext, ChannelContext } from "../App";

function ComponentD() {
	const user = useContext(UserContext); //useContext returns the value this method is much beneficall as compare to Consumer one
	const channel = useContext(ChannelContext);
	return (
		<div>
			{user} - {channel}
		</div>
	);
}

export default ComponentD;
