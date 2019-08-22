module.exports = {
  schedule: {
    type: 'worker',
    cron: '0 52 9 * * *',
  },
  async task (ctx) {

    ctx.sendDD ('吃晚饭啦！！');
  },
}