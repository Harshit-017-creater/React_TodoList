import React from "react";
import "./App.css";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			newItem: "",
			list: [],
		};
	}

	updateInput(input) {
		this.setState({ newItem: input });
		// console.log(this.state.newItem);
	}
	addItem(todoValue) {
		// console.log(todoValue);
		if (todoValue !== "") {
			const Item = {
				id: Date.now(),
				value: todoValue,
				isDone: false,
			};
			// console.log(Item);
			const list = [...this.state.list];
			list.push(Item);
			this.setState({
				list,
				newItem: "",
			});
		}
	}
	deleteItem(id) {
		const list = [...this.state.list];
		const updatedList = list.filter((item) => item.id !== id);
		this.setState({ list: updatedList });
	}
	render() {
		return (
			<div>
				<h1 className="app-title">React ToDo List</h1>
				<div className="container">
					Add an Item <br />
					<input
						type="text"
						className="input-text"
						placeholder="Enter your task"
						value={this.state.newItem}
						onChange={(e) => this.updateInput(e.target.value)}
					/>
					<button
						className="add-btn"
						onClick={() => this.addItem(this.state.newItem)}
					>
						Add
					</button>
					<div className="list">
						<ul>
							{this.state.list.map((item) => {
								return (
									<li>
										<input type="checkbox"></input>
										{item.value}
										<button
											className="btn"
											onClick={() => this.deleteItem(item.id)}
										>
											Delete
										</button>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
export default App;
