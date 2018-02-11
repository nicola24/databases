import React from 'react';

const Chat = props => (
  <div>
    <ul>
      <li>
        <button id="usernameLink" onClick={() => props.handleBlockUserClick(props.message.username)}>{props.message.username}</button>
        <p id="userText">{props.message.message}</p>
        <p id="time">{props.message.createdAt}</p>
      </li>
    </ul>
  </div>
);

export default Chat;

