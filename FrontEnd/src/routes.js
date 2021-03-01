import React from 'react';

const User = React.lazy(() => import("./views/users/User"));
const UserDetail = React.lazy(() => import('./views/users/UserDetail'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/user', name: 'User', component: User },
  { path: '/userdetail', name: 'User Detail', component: UserDetail },
];

export default routes;
