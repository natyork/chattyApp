import React, {Component} from 'react';
import Nav from './Nav.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.socket = new WebSocket('ws://localhost:4000');
    this.updateMessage = this.updateMessage.bind(this);
    this.state = {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          id: 1,
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          id: 2,
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    };

  }

  componentDidMount() {
    console.log("componentDidMount <App />");


    this.socket.onopen = function () {
      console.log('Connected to server!');
    }
  }



// updates state when a new message is entered in the chat bar - function invoked from ChatBar
  updateMessage(newMessage) {
    let id = this.state.messages.length +1;
    let username = this.state.currentUser.name;
    let content = newMessage;
    let newMessageObject = {
      id: id,
      username: username,
      content: content
    };

    this.socket.send(newMessage);




    // let messages =this.state.messages.concat(newMessageObject)
    // this.setState({messages: messages});
    // console.log(this.state);

  }


  render() {
    console.log("Rendering <App/>");

    return (
      <div className="wrapper">
        <Nav />
        <MessageList messages={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser} updateMessage={this.updateMessage} socket={this.socket}/>
      </div>
    );
  }

}
export default App;
