import React from "react";
import "./App.css";
class App extends React.Component {
	render() {
		return (
			<div>
				<h1 className="app-title">React ToDo List</h1>
				<div className="container">
					Add your todo....
					<br />
					<input
						type="text"
						className="input-text"
						placeholder="Enter your Text"
					/>
				</div>
			</div>
		);
	}
}
export default App;
