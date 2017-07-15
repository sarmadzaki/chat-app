import React, { Component } from 'react'
import * as firebase from 'firebase';
import '../App.css'
import ChatBox from './Chat_Box'
class ChatRoom extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userTyping: "",
      focus: false,
      message: '',
      messages: [],
      loading: 'Loading....'
    }
  }

  componentDidMount() {
    console.log("mount component");
    firebase.database().ref('messages/').on('value', (snapshot) => {
      const currentMessages = snapshot.val()
      // const loading = <p>Loading...</p>
      if (currentMessages != null) {
        this.setState({
          messages: currentMessages,
          loading: " "
        })
      } else {

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
        <li key={i} className="bubble">
            <div className=""></div>
          {message.text}
        </li>
      )
    });
    return (

      <div>
        <ChatBox messages={currentMessages}
                  loadingMessage={this.state.loading}          
         />
        <form className="col-md-8" onSubmit={(event) => this.submitMessage(event)}>
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
