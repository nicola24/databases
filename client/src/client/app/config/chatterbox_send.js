import $ from 'jquery';
// import keys from './chatterboxapikey';

const send = (message) => {
  $.ajax({
    url: '/classes/messages',
    type: 'POST',
    data: JSON.stringify(message),
    // crossDomain: true,
    contentType: 'application/json',
    // headers: keys,
    success: () => {
      console.log('Message sent!');
    },
    error: () => {
      console.error('Did not send');
    },
  });
};

export default send;
