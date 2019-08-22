
module.exports = {
  schedule: {
    type: 'worker',
    cron: '0 */5 * * * *',
  },
  async task (ctx) {

    ctx.sendDD ('每5分钟的提醒，记得喝水');
  },
}