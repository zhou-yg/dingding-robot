const request = require('request');
const apiUrl2 = 'https://oapi.dingtalk.com/robot/send?access_token=6d3f9ec5b82afec83d40c3ae6b3d796a4ef633cdfc06b73deaaa7f22d3899f27';

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
