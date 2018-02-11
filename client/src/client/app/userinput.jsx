import React from 'react';

const UserInput = props => (
  <div>
    <input id="UsernameInput" type="text" placeholder="username" onChange={(valueUsername) => props.handleUsernameInputChange((valueUsername.target.value))} />
    <input id="MessageInput" type="text" placeholder="message" onChange={(valueMessage) => props.handleMessageInputChange((valueMessage.target.value))} />
    <input id="submitButton" type="submit" value="submit message" onClick={() => props.handleSubmitButtonClick()} />
  </div>
);

export default UserInput;


