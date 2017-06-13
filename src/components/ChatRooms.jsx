import React, { Component } from 'react'
import * as firebase from 'firebase';
class ChatRoom extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      message: '',
      messages: []
    }
  }
  componentDidMount() {
    console.log("mount component");
    firebase.database().ref('messages/').on('value', (snapshot) => {
      const currentMessages = snapshot.val()
      if(currentMessages != null) {
        this.setState({
          messages: currentMessages
        })
      }
    } )
  }
  updateMessage(event) {
    console.log(event.target.value);
    this.setState({
      message: event.target.value
    })
  }
  submitMessage(event) {
    console.log(this.state.message);
    const nextMessage = {
      id: this.state.messages.length,
      text: this.state.message
    }
    firebase.database().ref('messages/'+nextMessage.id).set(nextMessage)
    // let list = Object.assign([], this.state.messages);
    // list.push(nextMessage)
    // this.setState({
    //   messages: list
    // })
     this.refs.msg.value = "";
    
  }
  render() {
    const currentMessages = this.state.messages.map((message, i) => {
      return (
        <li key={i} className="list-group-item well">{message.text}</li>
      )
    });
    return (
      <div>
        <ol className="list-group">
          {currentMessages}
        </ol>
        <input ref="msg" onChange={(event) => this.updateMessage(event)} className="form-control" type="text" />
        <br />
        <button onClick={(event) => this.submitMessage(event)} className="btn btn-primary">Send</button>
      </div>
    );
  }
}
export default ChatRoom;
