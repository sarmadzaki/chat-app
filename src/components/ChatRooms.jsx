import React, { Component } from 'react'
import * as firebase from 'firebase';
import '../app/App.css'
import ChatBox from './Chat_Box'
class ChatRoom extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      message: '',
      messages: [],
      loading: 'Loading....'
    }
  }

  componentDidMount() {
    console.log("mount component");
    firebase.database().ref('messages/').on('value', (snapshot) => {
      const currentMessages = snapshot.val();
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
    this.setState({
      message: event.target.value
    })
  }

  submitMessage(event) {
    event.preventDefault()
    const nextMessage = {
      id: this.state.messages.length,
      text: this.state.message
    }
    firebase.database().ref('messages/' + nextMessage.id).set(nextMessage)
    this.refs.msg.value = "";
  }
  userTyping(e) {
    firebase.database().ref('typing/').set({
      status: true
    });
    firebase.database().ref('typing/').set({
      status: true
    });
    firebase.database().ref('typing/').on('value', (snap) => {
      this.setState({
        typing: snap.val()
      })
    })
  }
  notTyping(e) {
    firebase.database().ref('/typing').set({
      status: false
    });
    firebase.database().ref('typing/').on('value', (snap) => {
      this.setState({
        typing: snap.val()
      })
    })
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
          typing={this.state.typing}
        />

        <form className="col-md-8 form" onSubmit={(event) => this.submitMessage(event)}>
          <div className="input-group">
            <input required ref="msg"
              onBlur={(event) => { this.notTyping(event) }}
              onFocus={(event) => { this.userTyping(event) }}
              onChange={(event) => this.updateMessage(event)}
              className="form-control input-sm" type="text" />
            <span className="input-group-btn">
              <button className="btn btn-warning btn-sm" id="btn-chat">
                Send</button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}
export default ChatRoom;
