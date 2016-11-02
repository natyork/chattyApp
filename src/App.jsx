import React, {Component} from 'react';
import Nav from './Nav.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.updateMessage=this.updateMessage.bind(this);
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

  componentDidMount (newMessage) {
    console.log("componentDidMount <App />");
  }

  // changeCurrentUser(id){
  //   let name = this.state.messages.filter()
  //   this.state.messages.id === id;
  //   this.setState.currentUser({name: name})

  // }


// updates state when a new message is entered in the chat bar - function invoked from ChatBar
  updateMessage (newMessage) {
    let id = this.state.messages.length +1;
    let username = this.state.currentUser.name;
    let content = newMessage;
    let newMessageObject = {
      id: id,
      username: username,
      content: content
    };
    console.log(newMessageObject);
    let messages =this.state.messages.concat(newMessageObject)
    this.setState({messages: messages});
    console.log(this.state);
  }


  render() {
    console.log("Rendering <App/>");

    return (
      <div className="wrapper">
        <Nav />
        <MessageList messages={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser} updateMessage={this.updateMessage}/>
      </div>
    );
  }

}
export default App;
