import React from "react";
import { useDispatch } from "react-redux";
import { deleteTarea } from "../../redux/tareaSlice"; 


const TDItem = ({ id, title }) => {

	const dispatch = useDispatch();

	const removeTask=() => {
		dispatch(
			deleteTarea({
				id: id
			})
		)
	}

	return (
		<li className="task-item">
			<div>
				{title}
			</div>
			<div>
				<button className="remove-task-button" onClick={()=>{
					alert("Estás por eliminar una tarea seleccionada.");
					removeTask();
				}}>Eliminar</button>
			</div>
		</li>
	);
};

export default TDItem;