import React, { useState, useEffect } from "react";
import axios from "axios";

function SpecificDataFetching() {
	const [user, setUser] = useState({});
	const [id, setId] = useState(1);
	const [idFromButtonClick, setIdFromButtonClick] = useState(1);
	const handleClick = () => {
		setIdFromButtonClick(id);
	};

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
			.then((res) => {
				console.log(res);
				setUser(res.data);
			})
			.catch((err) => console.log(err));
	}, [idFromButtonClick]);
	return (
		<div>
			<input type="text" value={id} onChange={(e) => setId(e.target.value)} />
			<button type="button" onClick={handleClick}>
				Fetch Post
			</button>
			<div>{user.title}</div>
		</div>
	);
}

export default SpecificDataFetching;
