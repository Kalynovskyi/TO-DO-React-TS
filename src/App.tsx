import React, { useState } from "react";
import List from "./components/List/List";
import "./App.css";
import Form from "./components/Form/Form";

const TASKS = [
	{
		key: 0,
		title: "Title",
		description: "Description",
		time: new Date("2024-03-25")
	},
	{
		key: 1,
		title: "Title 2",
		description: "Description 2",
		time: new Date(2024, 0, 1, 16, 13, 4)
	},
]

function App() {
	const [tasks, setTasks] = useState(TASKS);

	const handleSubmitForm = (task:Task) => {
		tasks.unshift(task);
		setTasks([...tasks]);
	}

	const handleRemoveItem = (key: number) => {
		const updatedTasks = tasks.filter(task => task.key !== key);
		setTasks(updatedTasks);
	}

    return <React.Fragment>
		<div className="container mx-auto flex justify-center flex-col items-center bg-slate-300 rounded-3xl p-5 space-y-5">
			<Form onSubmitForm={handleSubmitForm} ></Form>
			<List tasks={tasks} onRemoveItem={handleRemoveItem}></List>
		</div>
	</React.Fragment>;
}

export default App;
