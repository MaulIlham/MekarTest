import React from 'react';

const User = React.lazy(() => import("./views/users/User"));
const UserDetail = React.lazy(() => import('./views/users/UserDetail'));
const Login = React.lazy(() => import("./views/login/login"));

const routes = [
  { path: '/login', exact: true, name: Login},
  { path: '/user', name: 'User', component: User },
  { path: '/userdetail', name: 'User Detail', component: UserDetail },

];

export default routes;
