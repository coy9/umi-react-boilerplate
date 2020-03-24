// 跑在node层
import { defineConfig } from 'umi';
const random = Math.random()
console.log(random)
// 权限菜单管理
const routes = random > .5 ? [
  {// 如果已经登陆，需要重定向到 /
    path: '/login',
    component: '@/pages/login',
    // wrappers: [
    //   '@/pages/auth',
    // ]
  },
  {
    path: '/',
    component: '@/pages',
  },
  {
    path: '/list',
    // exact: true,
    name: '列表',
    // component: '@/layouts/index',
    routes: [
      // { path: '/list', component: 'list', name: '首页' },
      { path: 'go', component: '@/pages/user/go', name: '列表-1' },
      { path: 'to', component: '@/pages/user/to', name: '列表-2' },
    ],
  },
  {
    path: '/user', component: '@/pages/user', name: '用户(此路由需要登陆)', wrappers: [
      '@/pages/auth',
    ]
  },
  { path: '/purp', component: '@/pages/purp', name: '大于0.5情况' }
] : [
    {
      path: '/',
      component: '@/pages',
    },
    { path: '/purp', component: '@/pages/purp', name: '小于0.5情况' }
  ]


export default defineConfig({
  // chunks: ['vendors', 'umi'],
  layout: {
    name: 'Ant Design',
  },
  // dynamicImport: {},
  hash: true,
  antd: {
    // dark: true
  },
  routes: routes,
  // {
  //   exact: true, path: '/user', component: '@/pages/user', name: '首页', routes: [{
  //     exact: true, path: 'go', component: '@/pages/user/go', name: '首页1'
  //   }]
  // },  
  // { exact: true, path: '/list', component: 'list', name: '列表' }],
  // 不被打包的模块
  // externals: {
  //   react: 'window.React',
  //   umi: 'window.Umi'
  // },
  // scripts: [
  //   'https://unpkg.com/browse/react@16.12.0/umd/react.production.min.js',

  // ],
  // chainWebpack: function (config, { webpack }) {
  //   config.merge({
  //     optimization: {
  //       minimize: true,
  //       splitChunks: {
  //         chunks: 'all',
  //         minSize: 30000,
  //         minChunks: 3,
  //         automaticNameDelimiter: '.',
  //         cacheGroups: {
  //           vendor: {
  //             name: 'vendors',
  //             test({ resource }) {
  //               return /[\\/]node_modules[\\/]/.test(resource);
  //             },
  //             priority: 10,
  //           },
  //         },
  //       },
  //     }
  //   });
  // },
});
