import $ from 'jquery';
// import keys from './chatterboxapikey';

const fetch = (cb) => {
  $.ajax({
    url: '/classes/messages',
    type: 'GET',
    // data: 'order=-createdAt&limit=100',
    // headers: keys,
    contentType: 'application/json',
    success: (data) => {
      cb(data.results);
      console.log('chatterbox: Item received');
    },
    error: () => {
      console.error('Data not retrieved');
    },
  });
};

export default fetch;
