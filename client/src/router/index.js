import Vue from 'vue';
import Router from 'vue-router';
import TeacherDashboard from '@/components/TeacherDashboard';
import ClassHome from '@/components/ClassHome';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Teacher Home',
      component: TeacherDashboard,
    },
    {
      path: '/class',
      name: 'Class Dashboard',
      component: ClassHome,
    },
  ],
});
