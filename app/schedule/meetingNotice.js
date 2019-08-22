
module.exports = {
  schedule: {
    type: 'worker',
    cron: '0 5 9 * * *',
  },
  async task (ctx) {

    ctx.sendDD ('晨会开始喽，大家同步下晨会内容并@我');
  },
}