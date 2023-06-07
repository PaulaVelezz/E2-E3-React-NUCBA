import React from "react";
import TDItem from "./TDItem"; 
import { useSelector } from "react-redux";

const TDList = () => {
	const todos = useSelector((state)=>{
		return state.tasks;
	});

	return (
		<ul className="tasks-list">
			{todos.map((todo) => (
				<TDItem id={todo.id} title={todo.name} completed={todo.status} />
			))}
		</ul>
	);
};

export default TDList;