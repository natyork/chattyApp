import React, {Component} from 'react';
import Message from './Message.jsx';


class MessageList extends Component {

 constructor(props) {
    super(props);
    this.displayMessage=this.displayMessage.bind(this);

  }

  displayMessage() {
    return (
      <div>
        {this.props.messages.map((currentValue, _index, _array)=> {
          return (<Message key = {currentValue.id} message= {currentValue} />);
        })}
      </div>
    );
  }

  render() {
    console.log("Rendering <MessageList/>");

    return (
      <div id="message-list">
        {this.displayMessage()}
      </div>
    );
  }

}
export default MessageList;
