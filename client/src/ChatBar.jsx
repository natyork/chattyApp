import React, {Component} from 'react';

class ChatBar extends Component {

 constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.state = {
        username: this.props.currentUser.name,
        content: ""
    };
  }

// updates state with current value in input field
  handleChange(event) {
    let id = event.target.id;
    let value = event.target.value.trim();

    if (id === "new-message") {
      this.setState({content: value});
    }

    if (id === "username") {
      this.setState({username: value});
    }
  }

  // when user enters message and hits 'Enter' updateMessage is called with current state
  handleSubmit(event) {
    let id = event.target.id;
    let value = event.target.value.trim();
    let chatFieldObj = {
      username: this.state.username,
      content: this.state.content
    }

    if (event.key === 'Enter' && value !="") {
      if (id === 'new-message') {
        this.props.updateChatFields(chatFieldObj);
        event.target.value ="";
      }

    }
  }

  render() {
    console.log("Rendering <ChatBar/>");
    return (
      <footer>
        <div></div>
        <input
          id="username"
          type="text"
          placeholder="Type your username and hit ENTER"
          defaultValue={this.state.username}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit}
        />
        <input
          id="new-message"
          type="text"
          placeholder="Type a message and hit ENTER"
          defaultValue={this.state.value}
          onChange ={this.handleChange}
          onKeyDown={this.handleSubmit}
        />
      </footer>
    );
  }

}
export default ChatBar;






