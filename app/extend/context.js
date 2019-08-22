const request = require('request');
const apiUrl2 = 'https://oapi.dingtalk.com/robot/send?access_token=72112c9fe03adca7dc98ad5007ccb3610afdd625a58024bbc92aa2cdb433cef1';

module.exports = {
  sendDD (c) {
    request({
      url: apiUrl2,
      method: 'POST',
      json: true,
      body: {
        msgtype: 'text',
        text: {
          content: c,
        }
      },
    }, (err, res, body) => {
      console.log('body:', body);
    });    
  }
}