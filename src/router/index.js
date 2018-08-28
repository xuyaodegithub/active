import Vue from 'vue'
import Router from 'vue-router'
// import mainCenter from '@/components/mainSub/mainSub/indexF'
//路由懒加载写法，避免打包体积过大，可以分块打包，按需加载，加快首次打开的速度
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexF',
      component:() => import(/* webpackChunkName: "indexF" */ '@/components/mainSub/mainSub/indexF')
    },
    {
      path: '/AssociationBrief',
      name: 'AssociationBrief',
      component: () => import(/* webpackChunkName: "AssociationBrief" */ '@/components/mainSub/mainSub/AssociationBrief')
    },
    {
      path: '/NewsInformation',
      name: 'NewsInformation',
      component: () => import(/* webpackChunkName: "NewsInformation" */ '@/components/mainSub/mainSub/NewsInformation')
    },
    {
      path: '/ArtLibrary',
      name: 'ArtLibrary',
      component: () => import(/* webpackChunkName: "ArtLibrary" */ '@/components/mainSub/mainSub/ArtLibrary')
    },
    {
      path: '/evaluation',
      name: 'evaluation',
      component: () => import(/* webpackChunkName: "evaluation" */ '@/components/mainSub/mainSub/evaluation')
    },
    {
      path: '/auction',
      name: 'auction',
      component: () => import(/* webpackChunkName: "auction" */ '@/components/mainSub/mainSub/auction')
    },
    {
      path: '/AntiqueMarket',
      name: 'AntiqueMarket',
      component: () => import(/* webpackChunkName: "AntiqueMarket" */ '@/components/mainSub/mainSub/AntiqueMarket')
    },
    {
      path: '/NoticeBulletin',
      name: 'NoticeBulletin',
      component: () => import(/* webpackChunkName: "NoticeBulletin" */ '@/components/mainSub/mainSub/NoticeBulletin')
    },
    {
      path: '/videoList',
      name: 'videoList',
      component: () => import(/* webpackChunkName: "videoList" */ '@/components/mainSub/mainSub/videoList')
    },
    {
      path: '/concatUs',
      name: 'concatUs',
      component: () => import(/* webpackChunkName: "concatUs" */ '@/components/mainSub/mainSub/concatUs')
    },
    {
      path: '/joinUs',
      name: 'joinUs',
      component: () => import(/* webpackChunkName: "jionUs" */ '@/components/mainSub/mainSub/jionUs')
    },
    {
      path: '/callUs',
      name: 'callUs',
      component: () => import(/* webpackChunkName: "callUs" */ '@/components/mainSub/mainSub/callUs')
    },
    {
      path: '/newsDetial',
      name: 'newsDetial',
      component: () => import(/* webpackChunkName: "newsDetial" */ '@/components/mainSub/detailPage/newsDetial')
    },
    {
      path: '/artDetial',
      name: 'artDetial',
      component: () => import(/* webpackChunkName: "artDetial" */ '@/components/mainSub/detailPage/artDetial')
    },
    {
      path: '/supDetial',
      name: 'supDetial',
      component: () => import(/* webpackChunkName: "supDetial" */ '@/components/mainSub/detailPage/supDetial')
    },
    {
      path: '/morePai',
      name: 'morePai',
      component: () => import(/* webpackChunkName: "morePai" */ '@/components/mainSub/mainSub/morePai')
    },
    {
      path: '/seachList',
      name: 'seachList',
      component: () => import(/* webpackChunkName: "seachList" */ '@/components/publicSub/seachList')
    },
  ],
  scrollBehavior (to, from, savedPosition) {//路由切换时滚轮位置//scrollBehavior 方法接收 to 和 from 路由对象。第三个参数 savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition
    } else if(to.name==='newsDetial' || to.name==='artDetial' || to.name==='joinUs' || to.name==='callUs' || to.name==='supDetial' || to.name==='AssociationBrief' ){
      return { x: 0, y:580 }
    }else{
       return { x: 0, y:0 }
    }
  }
})
