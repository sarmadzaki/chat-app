import React, { Component } from 'react';
import ChatRoom from './components/ChatRooms.jsx';

class App extends Component {
  render() {
    return (
      <div className="container">
      <ChatRoom/>
      </div>
    );
  }
}
// ReactDOM.render(<App />, document.getElementById('app'));
export default App;
