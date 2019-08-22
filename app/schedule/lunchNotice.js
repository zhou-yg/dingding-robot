module.exports = {
  schedule: {
    type: 'worker',
    cron: '0 52 11 * * *',
  },
  async task (ctx) {

    ctx.sendDD ('吃午饭啦！！人是铁，饭是钢，一顿不吃饿的慌');
  },
}