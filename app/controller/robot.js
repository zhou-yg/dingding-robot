const request = require('request');
const { Controller } = require('egg')

const apiUrl2 = 'https://oapi.dingtalk.com/robot/send?access_token=72112c9fe03adca7dc98ad5007ccb3610afdd625a58024bbc92aa2cdb433cef1';

class Robot extends Controller {
  async reply() {
    console.log(this.ctx.query);
    console.log(this.ctx.request.body);

    const c = JSON.stringify(this.ctx.query) + '  ,  ' + JSON.stringify(this.ctx.request.body);

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


    this.ctx.body = c;

  }
  async send() {
    const { txt } = this.ctx.query;

    request({
      url: apiUrl2,
      method: 'POST',
      json: true,
      body: {
        msgtype: 'text',
        text: {
          content: txt,
        }
      },
    }, (err, res, body) => {
      console.log('body:', body);
    });

    this.ctx.body = txt;
  }
}

module.exports = Robot;