import React, {Component} from 'react';

class ChatBar extends Component {

 constructor(props) {
    super(props);
    this.state = {value: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if (event.key === 'Enter') {
      this.props.changeHandler(this.state.value);
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



