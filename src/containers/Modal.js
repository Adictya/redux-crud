import React, { Component } from "react";

class Modal extends Component {
	constructor(props) {
		super(props);
		this.handleSave = this.handleSave.bind(this);
		this.state = {
			name: "",
			email: "",
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			name: nextProps.name,
			email: nextProps.email,
		});
	}

	titleHandler(e) {
		this.setState({ name: e.target.value });
	}

	msgHandler(e) {
		this.setState({ email: e.target.value });
	}

	handleClose() {
		console.log("I was called");
		this.props.closed();
	}
	handleSave() {
		console.log("I was also called");
		const item = this.state;
		this.props.saveModalDetails(item);
	}

	render() {
		return (
			<div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-name" id="exampleModalLabel">
								Edit Jewel
							</h5>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
								onClick={() => {
									this.handleClose();
								}}
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<p>
								<span className="modal-lable">Title:</span>
								<input
									value={this.state.name}
									onChange={(e) => this.titleHandler(e)}
								/>
							</p>
							<p>
								<span className="modal-lable">Msg:</span>
								<input
									value={this.state.email}
									onChange={(e) => this.msgHandler(e)}
								/>
							</p>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal"
								onClick={() => {
									this.handleClose();
								}}
							>
								Close
							</button>
							<button
								type="button"
								className="btn btn-primary"
								data-dismiss="modal"
								onClick={() => {
									this.handleSave();
								}}
							>
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Modal;
