//路由配置文件
const layout = () => import('../view/layout')

let constantRouterMap = [
  {
    path: '/',
    component: layout,
    children:[
      {
        path: '/',
        component: () => import('../view/home'),
      },
      {
        path: '/article/:articleId',
        component: () => import('../view/article'),
      }
    ]
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