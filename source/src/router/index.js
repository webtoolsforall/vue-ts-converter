
/**
 * router config list
 */
const Vue = require('vue');
const Router = require('vue-router');
const base = require('./modules/base');
const solutions = require('./modules/solutions');
const partner = require('./modules/partner');
const news = require('./modules/news');
const service = require('./modules/service');
const all = require('./modules/all');
/** router config end */
Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  },
  routes: [
    ...base,
    {
      path: `/:cn`,
      component: {
        template: '<router-view />',
      },
      children: [
        ...solutions,
        ...all,
        ...partner,
        ...news,
        ...service
      ]
    },
  ]
})


module.exports = router