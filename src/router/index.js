import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import First from '@/components/First';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/f',
      name: 'First',
      component: First
    }
  ]
});
