import React, { Component } from 'react';
import ChatRoom from '../components/Chat/ChatRooms'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>React Chat App</h1>
      <ChatRoom/>
      </div>
    );
  }
}
export default App;
