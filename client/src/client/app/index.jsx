import React from 'react';
import { render } from 'react-dom';
// import sampleData from '../data/sampleData';
import fetch from './config/chatterbox_fetch';
import send from './config/chatterbox_send';
import UserInput from './userinput';
import ChatFeed from './chatfeed';


class App extends React.Component {
  constructor() {
    super();
    this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this);
    this.handleUsernameInputChange = this.handleUsernameInputChange.bind(this);
    this.handleMessageInputChange = this.handleMessageInputChange.bind(this);
    this.getDataFromFetch = this.getDataFromFetch.bind(this);
    this.handleBlockUserClick = this.handleBlockUserClick.bind(this);
    this.fetch = fetch;
    this.send = send;
    this.state = {
      messages: [],
      valueUsername: '',
      valueMessage: '',
      blockedUsers: ['bort'],
    };
  }

  componentDidMount() {
    setTimeout(() => this.fetch(this.getDataFromFetch), 200);
    setInterval(() => this.fetch(this.getDataFromFetch), 5000);
  }
  getDataFromFetch(array) {
    const filteredArray = array.filter(message =>
      !this.state.blockedUsers.includes(message.username));
    this.setState({ messages: filteredArray });
  }
  handleMessageInputChange(value) {
    this.setState({ valueMessage: value });
  }
  handleUsernameInputChange(value) {
    this.setState({ valueUsername: value });
  }
  handleBlockUserClick(user) {
    this.setState({ blockedUsers: this.state.blockedUsers.concat([user]) });
    this.fetch(this.getDataFromFetch);
  }
  handleSubmitButtonClick() {
    this.send({ username: this.state.valueUsername, message: this.state.valueMessage, roomname: 'lobby' });
    this.fetch(this.getDataFromFetch);
  }
  render() {
    return (
      <div>
        <div>
         <ChatFeed messages={this.state.messages} handleBlockUserClick={this.handleBlockUserClick} />
        </div>
        <footer>
          <div>
            <UserInput
              handleSubmitButtonClick={this.handleSubmitButtonClick}
              handleMessageInputChange={this.handleMessageInputChange}
              handleUsernameInputChange={this.handleUsernameInputChange}
            />
          </div>
          <div>
            <h1>Chatterbox</h1>
          </div>
        </footer>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));

