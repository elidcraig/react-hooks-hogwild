import React from "react";
import Nav from "./Nav";
import HogTileContainer from "./HogTileContainer"

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<HogTileContainer hogData={hogs}/>
		</div>
	);
}

export default App;
