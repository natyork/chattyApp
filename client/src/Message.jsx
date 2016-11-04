import React, {Component} from 'react';

class Message extends Component {

  constructor(props) {
    super(props);
    this.selectContent = this.selectContent.bind(this);
  }


  selectContent() {
    if (this.props.message.type === 'incomingNotification'){
        return (
          <div className="message system">
          {this.props.message.info.notification}
        </div>

      );
    }

    if (this.props.message.type === 'incomingMessage'){
      return (
        <div className="message">
          <span className="username">{this.props.message.info.username}</span>
          <span className="content">{this.props.message.info.content}</span>
        </div>

      );
    }
  }

  renderNotification() {
    return (
      <div className="message system">
        {this.props.message.info.notification}
      </div>
    );
  }



  render() {
    console.log("Rendering <Message/>");

    return (
      <div>
        {this.props.message.type === 'incomingNotification' && renderNotification()}
        {this.props.message.type === 'incomingMessage' && renderMessage()}
      </div>
    );
  }

}
Message.propTypes = {
  content: React.PropTypes.string.required // validations
};
export default Message;


