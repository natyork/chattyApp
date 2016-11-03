import React, {Component} from 'react';

class Message extends Component {

  constructor(props) {
    super(props);
    this.selectContent = this.selectContent.bind(this);
  }


  selectContent() {
    if (this.props.message.type === 'incomingNotification'){
        console.log('=========notif?', this.props.message.type, '=========')
        return (
          <div className="message system">
          {this.props.message.info.notification}
        </div>

      );
    }

    if (this.props.message.type === 'incomingMessage'){
      console.log('=========message?', this.props.message.type, '=========')
      return (
        <div className="message">
          <span className="username">{this.props.message.info.username}</span>
          <span className="content">{this.props.message.info.content}</span>
        </div>

      );
    }
  }



  render() {
    console.log("Rendering <Message/>");

    return (
      <div>
      {this.selectContent()}
      </div>
    );
  }

}
export default Message;


