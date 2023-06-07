import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTarea } from "../../redux/tareaSlice"; 

const AddTD = () => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();

		if(value.trim().length === 0)
		{
			alert("Necesitas ingresar una tarea.");
			setValue("");
			return;
		}

		dispatch(
			addTarea({
				task: value
			})
		);

		setValue("");
	};

	return (
		<>
		<div className="todo-intro">
			<h1>To Do App</h1>
        	<h3>- Para cuando tenés déficit de B12 -</h3>
		</div>
		
		<div className="add-todo">
			<input
				type="text"
				className="task-input"
				placeholder="Probá agregando una tarea aca"
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button className="task-button" onClick={onSubmit}>
				Agregar
			</button>
		</div>
		</>
	);
};

export default AddTD;