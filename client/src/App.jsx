import React, {Component} from 'react';
import Nav from './Nav.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.socket = new WebSocket('ws://localhost:4000');
    this.updateChatFields = this.updateChatFields.bind(this);
    this.state = {
      currentUser: {name: "Bob"},
      messages: [] // messages coming from the server will be stored here as they arrive
    };
  }

  componentDidMount() {
    console.log("componentDidMount <App />");

    this.socket.onopen = function () {
      console.log('Connected to server!');
    }

    this.socket.onmessage = (event) => {
      console.log('in onmessage');
      let data = JSON.parse(event.data).data;
      let messages =this.state.messages.concat(data);
      console.log("========", this.state.messages, messages);
      this.setState({messages: messages});
      this.setState({currentUser: {name: data.username}});

    }
  }

// updates state when a new message is entered in the chat bar - function invoked from ChatBar
  updateChatFields(newCF) {
    // let username = newCF.username;
    // let content = newCF.message
    // let newMessageObject = {
    //   username: username,
    //   content: content
    // };

    this.socket.send(JSON.stringify(newCF));

  }

  // updateUsername(newUser) {
  //   console.log('in updateUsername',newUser);
  //   this.setState({currentUser: {name: newUser}});
  // }


  render() {
    console.log("Rendering <App/>");

    return (
      <div className="wrapper">
        <Nav />
        <MessageList
          messages={this.state.messages}
        />
        <ChatBar
          currentUser={this.state.currentUser}
          updateChatFields={this.updateChatFields}
        />
      </div>
    );
  }

}
export default App;
