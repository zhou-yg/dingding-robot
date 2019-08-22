const request = require('request');
const { Controller } = require('egg')

const apiUrl2 = 'https://oapi.dingtalk.com/robot/send?access_token=72112c9fe03adca7dc98ad5007ccb3610afdd625a58024bbc92aa2cdb433cef1';

class Robot extends Controller {
  async reply() {
    console.log(this.ctx.query);
    console.log(this.ctx.request.body);

    // const c = JSON.stringify(this.ctx.query) + '  ,  ' + JSON.stringify(this.ctx.request.body);
    const c = this.ctx.request.body.text.content + '!!';

    this.ctx.sendDD(c);


    this.ctx.body = c;

  }
  async send() {
    const { txt } = this.ctx.query;

    this.ctx.sendDD(txt);

    this.ctx.body = txt;
  }
}

module.exports = Robot;