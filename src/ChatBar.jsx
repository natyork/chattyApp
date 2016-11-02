import React, {Component} from 'react';

class ChatBar extends Component {

 constructor(props) {
    super(props);
    this.state = {value: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

// updates state with current value in input field
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  // when user enters message and hits 'Enter' updateMessage is called with current state
  handleSubmit(event) {
    if (event.key === 'Enter') {
      this.props.updateMessage(this.state.value);
      event.target.value ="";
    }
  }


  render() {
    console.log("Rendering <ChatBar/>");
    return (
      <footer>
        <div></div>
        <input id="username" type="text" defaultValue={this.props.currentUser.name}/>
        <input id="new-message" type="text" placeholder="Type a message and hit ENTER" defaultValue={this.state.value}  onChange={this.handleChange} onKeyDown={this.handleSubmit}/>
      </footer>
    );
  }

}
export default ChatBar;






