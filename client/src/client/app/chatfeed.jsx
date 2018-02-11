import React from 'react';
import Chat from './chat';

const ChatFeed = props => (
  <div>
    {props.messages.map(message =>
    <Chat message={message} handleBlockUserClick={props.handleBlockUserClick}/>)}
  </div>
);

export default ChatFeed;
