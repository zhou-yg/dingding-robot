'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/api/send', controller.robot.send);
  router.post('/api/reply', controller.robot.reply);
  router.get('/api/reply', controller.robot.reply);
};
