module.exports =  [{
    path: '/',
    component: r => require.ensure([], () => r(require('@/components/index/indexV3')), 'Index'),
    meta: {
      isEn: true,
      title: '京东云-云主机_云服务器_云计算_京东云 预见无限可能',
      keywords: '云主机,云硬盘,云存储,域名购买,网站备案',
      description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀，为广大用户提供安全稳定的云主机、BGP多线带宽、云存储、大数据等服务。',
      isabsolute: true
    }
  },
  {
    path: '/en/',
    component: r => require.ensure([], () => r(require('@/components/index/indexV3')), 'Index'),
    meta: {
      isEn: true,
      title: 'JDCloud-Future Beyond Possibility',
      keywords: '京东云、大数据、云计算、云存储、云主机、云服务器、网站备案',
      description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀，为广大用户和个人站长提供稳定、安全、便捷的多种解决方案，预见无限可能',
      isabsolute: true
    }
  },
  {
    path: '/cn/',
    component: r => require.ensure([], () => r(require('@/components/index/indexV3')), 'Index'),
    meta: {
      isEn: true,
      title: '京东云-预见无限可能',
      keywords: '京东云、大数据、云计算、云存储、云主机、云服务器、网站备案',
      description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀，为广大用户和个人站长提供稳定、安全、便捷的多种解决方案，预见无限可能',
      isabsolute: true
    }
  },
  {
    path: '*',
    name: 'notFound',
    component: r => require.ensure([], () => r(require('@/components/common/404')), 'notFound'),
    meta: {
      isEn: true,
      title: '404',
      keywords: '京东云、大数据、云计算、云存储、云主机、云服务器、网站备案',
      description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀，为广大用户和个人站长提供稳定、安全、便捷的多种解决方案，预见无限可能'
    }
  }
]