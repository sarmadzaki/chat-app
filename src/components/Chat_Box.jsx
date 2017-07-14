import React, { Component } from 'react'
import '../App.css'

class ChatBox extends Component {
	render() {
		return (
			<div className="chat  col-md-8">
				<ul className="list-group">
					{this.props.messages}
					{/* <p>{this.state.userTyping}</p> */}
				</ul>
			</div>
		);
	}
}

export default ChatBox;