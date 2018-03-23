import React, { Component } from 'react'
import * as firebase from 'firebase';
import '../../app/App.css';

class ChatBox extends Component {
	constructor(props){
		super(props);
		this.state = { typing: false	}
	}
	
	componentDidUpdate(previousProps, previousState) {
		var el = this.refs.last;
		el.scrollTop = el.scrollHeight;
	}
	render() {
		return (
			<div className="chat  col-md-8" ref="last">
				<ul className="list-group">
					{this.props.messages}
					<h1 className="loading">
					{this.props.loadingMessage}
					</h1>
					<h3>{this.state.typing? "typing" : ''}</h3>
				</ul>
			</div>
		);
	}
}

export default ChatBox;