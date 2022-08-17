//路由配置文件

let constantRouterMap = [
  {
    path: '/home',
    component: () => import('../view/home'),
  },
  {
    path: '/article/:articleId',
    component: () => import('../view/article'),
  },
  // {
  //   path: '/',
  //   component: layout,
  //   children:[
  //     {
  //       path: '/subset1/:id',
  //       component: () => import('../pages/basis/Subset1'),
  //     }
  //   ]
  // }
]
//异步获取路由
let asyncRouterMap = [

]
export default [...constantRouterMap, ...asyncRouterMap]