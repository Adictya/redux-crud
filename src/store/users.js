import * as actionTypes from "./actions";
import Axios from "axios";

export const editUser = (id, name, email) => {
	return {
		type: actionTypes.EDIT_USER,
		uid: id,
		uname: name,
		uemail: email,
	};
};

export const deleteUser = (id) => {
	return (dispatch) => {
		const I = id - 1;
		Axios.delete("https://redux-crud-898ea.firebaseio.com/users/" + I + ".json").then(
			(response) => {
				dispatch(initUser(id));
			}
		);
	};
};

export const delUser = (id) => {
	return {
		type: actionTypes.DELETE_USER,
		uid: id,
	};
};

export const setUsers = (users) => {
	return {
		type: actionTypes.GET_USERS,
		users: [...users],
	};
};

export const initUser = () => {
	return (dispatch) => {
		Axios.get("https://redux-crud-898ea.firebaseio.com/users.json").then((response) => {
			dispatch(setUsers(response.data));
		});
	};
};
