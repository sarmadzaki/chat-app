import React, { Component } from 'react'
import * as firebase from 'firebase';
import '../App.css'
class ChatRoom extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userTyping: "",
      focus: false,
      message: '',
      messages: []
    }
  }
  componentDidMount() {
    console.log("mount component");
    firebase.database().ref('messages/').on('value', (snapshot) => {
      const currentMessages = snapshot.val()
      if (currentMessages != null) {
        this.setState({
          messages: currentMessages
        })
      }
    })
  }
  updateMessage(event) {
    console.log(event.target.value);

    this.setState({
      message: event.target.value
    })
  }
  userTyping() {
    this.setState({
      userTyping: "someone is typing..."
    })
  }
  notTyping() {
    this.setState({
      userTyping: ''
    })
  }
  submitMessage(event) {
    event.preventDefault()
    console.log(this.state.message);
    const nextMessage = {
      id: this.state.messages.length,
      text: this.state.message
    }
    firebase.database().ref('messages/' + nextMessage.id).set(nextMessage)
    this.refs.msg.value = "";
  }
  render() {
    const currentMessages = this.state.messages.map((message, i) => {
      return (
        <li key={i} className="alert alert-success">{message.text}</li>
      )
    });
    return (
      <div className="chat  col-md-5">
        <ol className="list-group">
          {currentMessages}
          <p>{this.state.userTyping}</p>
        </ol>
        <form onSubmit={(event) => this.submitMessage(event)}>
          <input required ref="msg"
            onBlur={(event) => { this.notTyping(event) }}
            onFocus={(event) => { this.userTyping(event) }}
            onChange={(event) => this.updateMessage(event)}
            className="form-control" type="text" />
          <br />
          <button className="btn btn-primary">Send</button>
        </form>
      </div>
    );
  }
}
export default ChatRoom;
