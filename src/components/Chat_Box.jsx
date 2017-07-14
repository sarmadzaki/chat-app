import React, { Component } from 'react'


class ChatBox extends Component {
	render() {
		return (
			<div className="chat  col-md-5">
				<ol className="list-group">
					{this.props.messages}
					{/* <p>{this.state.userTyping}</p> */}
				</ol>
			</div>
		);
	}
}

export default ChatBox;