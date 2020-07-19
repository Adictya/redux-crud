import React from "react";

const userRow = (props) => {
	return (
		<tr>
			<td>{props.id}</td>
			<td>{props.name}</td>
			<td>{props.email}</td>
			<td onClick={() => props.editHandle()}>Edit</td>
			<td onClick={() => props.deleteHandle(props.id)}>Delete</td>
		</tr>
	);
};
export default userRow;
