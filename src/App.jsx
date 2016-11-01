import React, {Component} from 'react';
import Nav from './Nav.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.newMessage=this.newMessage.bind(this);
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



  newMessage (newMessage) {
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
        <ChatBar currentUser={this.state.currentUser} changeHandler={this.newMessage}/>
      </div>
    );
  }

}
export default App;
