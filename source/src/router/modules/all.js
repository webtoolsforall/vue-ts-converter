module.exports =  [
    {
      path: 'search',
      name: 'search',
      component: r => require.ensure([], () => r(require('@/components/search/searchList')), 'search'),
      meta: {
        isEn: true,
        title: '搜索-京东云',
        keywords: '京东云、大数据、云计算、云存储、云主机、云服务器、网站备案',
        description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀，为广大用户和个人站长提供稳定、安全、便捷的多种解决方案，预见无限可能',
        isabsolute: false
      }
    },
    {
      "path": 'solutions/:name',
      component: r => require.ensure([], () => r(require('@/components/solutionCms/solutionTemplate')), 'solutionTemplate'),
      meta: {
        isabsolute: true,
        isEn: true,
        title: 'JD Cloud Foresee Infinite Possibility',
        keywords: '京东云,京东电商云,京东数据云, 京东物流云,京东智能云,京东产业云,京东云服务,京东云计算,电商云,数据云, 物流云,智能云,产业云,云解决方案',
        description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀,致力于打造社会化的云平台,培育开放的云生态,向全社会提供稳定、安全、便捷的云服务'
      }
    },
    {
      path: 'intelligentcity',
      name: 'intelligentcity',
      component: r => require.ensure([], () => r(require('@/components/smartCity/intelligentcity')), 'intelligentcity'),
      meta: {
        isEn: false,
        title: '智能城市-京东云',
        keywords: '智能城市,京东云脑,政务服务,公共安全,食品溯源',
        description: '京东云智能城市，致力于全方位实现“善政、兴业、惠民”的目标，助力城市数字化转型升级，让城市生活更简单美好。',
      }
    },
    {
      path: 'neec/:url',
      name: 'staticSetting-neec',
      component: r => require.ensure([], () => r(require('@/components/jdcnews/staticSetting')), 'staticSetting-neec'),
      meta: {
        isEn: true,
        isabsolute: true,
        title: '京东云-预见无限可能',
        keywords: '京东云、大数据、云计算、云存储、云主机、云服务器、网站备案',
        description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀，为广大用户和个人站长提供稳定、安全、便捷的多种解决方案，预见无限可能'
      }
    },
    {
      path: 'aidc/:url',
      name: 'staticSetting-aidc',
      component: r => require.ensure([], () => r(require('@/components/jdcnews/staticSetting')), 'staticSetting-aidc'),
      meta: {
        isEn: true,
        isabsolute: true,
        title: '京东云-预见无限可能',
        keywords: '京东云、大数据、云计算、云存储、云主机、云服务器、网站备案',
        description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀，为广大用户和个人站长提供稳定、安全、便捷的多种解决方案，预见无限可能'
      }
    },
    {
      path: 'video',
      name: 'video',
      component: r => require.ensure([], () => r(require('@/components/video/video-list')), 'video'),
      meta: {
        isEn: false,
        title: '视频中心-京东云',
        keywords: '视频中心,云朵说,品牌视频,活动视频',
        description: '京东云视频中心提供丰富多样的视频资源，云朵说栏目深入讲解京东云产品内容和解决方案详情，品牌视频和活动视频使用户全方位了解京东云。',
        isabsolute: true
      }
    },
    {
      path: 'forms',
      name: 'form-index',
      component: r => require.ensure([], () => r(require('@/components/forms/enterpriseHelper')), 'enterprise-helper'),
      redirect: 'forms/enterprise-helper',
      children: [{
        path: 'enterprise-helper',
        name: 'enterprise-helper',
        component: r => require.ensure([], () => r(require('@/components/forms/enterpriseHelper')), 'enterprise-helper'),
        meta: {
          isEn: false,
          title: '京东云-预见无限可能',
          keywords: '京东云、大数据、云计算、云存储、云主机、云服务器、网站备案',
          description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀，为广大用户和个人站长提供稳定、安全、便捷的多种解决方案，预见无限可能'
        }
      }]
    },
    {
      path: 'videoDetail',
      component: r => require.ensure([], () => r(require('@/components/video/videoDetail')), 'videoDetail'),
      meta: {
        isEn: false,
        title: '京东云-预见无限可能',
        keywords: '京东云、大数据、云计算、云存储、云主机、云服务器、网站备案',
        description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀，为广大用户和个人站长提供稳定、安全、便捷的多种解决方案，预见无限可能',
        isabsolute: false
      }
    },
    {
      path: 'appPartner',
      name: 'appPartner',
      component: r => require.ensure([], () => r(require('@/components/partner/appPartner')), 'appPartner'),
      meta: {
        isEn: false,
        title: '合作伙伴申请-京东云',
        keywords: '基础服务合作伙伴,云安全合作伙伴,云服务合作伙伴,云监控合作伙伴',
        description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀，为广大用户和个人站长提供稳定、安全、便捷的多种解决方案，预见无限可能'
      }
    },
    {
      path: 'datacenter',
      component: r => require.ensure([], () => r(require('@/components/datacenter/datacenter')), 'datacenter'),
      meta: {
        isEn: false,
        title: '京东云-预见无限可能',
        keywords: '京东云、大数据、云计算、云存储、云主机、云服务器、网站备案',
        description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀，为广大用户和个人站长提供稳定、安全、便捷的多种解决方案，预见无限可能'
      }
    },
    {
      path: 'help',
      component: r => require.ensure([], () => r(require('@/components/help/help')), 'help'),
      redirect: 'help/faq',
      children: [{
        path: 'faq',
        name: 'faq',
        component: r => require.ensure([], () => r(require('@/components/help/faq')), 'faq'),
        meta: {
          isabsolute: true,
          isEn: true,
          title: '帮助中心-京东云',
          keywords: '京东云、大数据、云计算、云存储、云主机、云服务器、网站备案',
          description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀，为广大用户和个人站长提供稳定、安全、便捷的多种解决方案，预见无限可能'
        }
      }, {
        path: 'detail/:contentId/isCatalog/:isCateLog',
        name: 'detail',
        component: r => require.ensure([], () => r(require('@/components/help/detail')), 'detail'),
        meta: {
          isEn: true,
          title: '帮助中心-京东云',
          keywords: '京东云、大数据、云计算、云存储、云主机、云服务器、网站备案',
          description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀，为广大用户和个人站长提供稳定、安全、便捷的多种解决方案，预见无限可能'
        }
      }, {
        path: 'searchInfo',
        name: 'searchInfo',
        component: r => require.ensure([], () => r(require('@/components/help/searchInfo')), 'searchInfo'),
        meta: {
          isEn: true,
          title: '帮助中心搜索-京东云',
          keywords: '京东云、大数据、云计算、云存储、云主机、云服务器、网站备案',
          description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀，为广大用户和个人站长提供稳定、安全、便捷的多种解决方案，预见无限可能'
        }
      }, ]
    },
    {
      path: 'products/jdstack',
      name: 'jdstack',
      component: r => require.ensure([], () => r(require('@/components/solution/jdstack')), 'jdstack'),
      meta: {
        isEn: true,
        title: 'JDStack_专有云_京东云',
        keywords: '专有云、私有化部署、定制化部署方案',
        description: '京东云专有云具备私有化部署、高可用、统一管控等特点，基于京东云可信赖的计算服务能力，为政府及企业客户快速搭建一个成熟稳定、安全合规的云平台。'
      }
    },
    {
      path: 'products/:id',
      name: 'products',
      component: r => require.ensure([], () => r(require('@/components/product/newProduct/jdcProductNew')), 'newProduct'),
      meta: {
        isabsolute: true
      }
    },
    {
      path: 'public',
      component: r => require.ensure([], () => r(require('@/components/public/publicCom')), 'publicCom'),
      children: [{
        path: 'testApply/:proID',
        name: 'testApply',
        component: r => require.ensure([], () => r(require('@/components/public/testApply')), 'testApply'),
        meta: {
          isEn: true,
          title: '公测申请-京东云',
          keywords: '京东云、大数据、云计算、云存储、云主机、云服务器、网站备案',
          description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀，为广大用户和个人站长提供稳定、安全、便捷的多种解决方案，预见无限可能'
        }
      }]
    },
    {
      path: 'notice',
      component: r => require.ensure([], () => r(require('@/components/notice/noticeCom')), 'notice'),
      redirect: '/notice/list',
      children: [{
        path: 'list',
        name: 'noticeList',
        component: r => require.ensure([], () => r(require('@/components/notice/noticeList'))),
        meta: {
          isEn: true,
          title: '公告列表-京东云',
          keywords: '京东云、大数据、云计算、云存储、云主机、云服务器、网站备案',
          description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀，为广大用户和个人站长提供稳定、安全、便捷的多种解决方案，预见无限可能'
        }
      }, {
        path: 'detail/:uuid/type/:type/includeType/:includeType',
        name: 'noticeDetail',
        component: r => require.ensure([], () => r(require('@/components/notice/noticeDetail'))),
        meta: {
          isEn: true,
          title: '公告详情-京东云',
          keywords: '京东云、大数据、云计算、云存储、云主机、云服务器、网站备案',
          description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀，为广大用户和个人站长提供稳定、安全、便捷的多种解决方案，预见无限可能'
        }
      }]
    },
    {
      path: 'newProduct',
      component: r => require.ensure([], () => r(require('@/components/product/newProduct')), 'newProduct'),
      meta: {
        isabsolute: true,
        isEn: true,
        title: '新产品发布平台-京东云',
        keywords: '京东云、大数据、云计算、云存储、云主机、云服务器、网站备案',
        description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀，为广大用户和个人站长提供稳定、安全、便捷的多种解决方案，预见无限可能'
      }
    },
    {
      path: 'newProduct/product201809',
      name: 'product201809',
      component: r => require.ensure([], () => r(require('@/components/product/product201809')), 'product201809'),
      meta: {
        isabsolute: true,
        isEn: false,
        title: '新产品发布平台-京东云',
        keywords: '京东云、大数据、云计算、云存储、云主机、云服务器、网站备案',
        description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀，为广大用户和个人站长提供稳定、安全、便捷的多种解决方案，预见无限可能'
      }
    },
    {
      path: 'calculator',
      component: r => require.ensure([], () => r(require('@/components/calculator/CalLayout')), 'CalLayout'),
      redirect: 'calculator/calHost',
      children: [{
          path: 'calHost',
          name: 'Host',
          component: r => require.ensure([], () => r(require('@/components/calculator/Host')), 'Host'),
          meta: {
            isEn: true,
            title: '云主机,价格总览,配置清单',
            keywords: '云主机,价格总览,配置清单',
            description: '登录后访问以获取更准确价格；按配置付费产品仅提供价格估算功能，具体价格以实际使用情况为准；实时库存及供给情况请登录购买页了解。'
          }
        },
        {
          path: 'calDisk',
          name: 'Disk',
          component: r => require.ensure([], () => r(require('@/components/calculator/Disk')), 'Disk'),
          meta: {
            isEn: true,
            title: '云硬盘,价格总览,配置清单',
            keywords: '云硬盘,价格总览,配置清单',
            description: '登录后访问以获取更准确价格；按配置付费产品仅提供价格估算功能，具体价格以实际使用情况为准；实时库存及供给情况请登录购买页了解。'
          }
        },
        {
          path: 'calLoad',
          name: 'Load',
          component: r => require.ensure([], () => r(require('@/components/calculator/Load')), 'Load'),
          meta: {
            isEn: true,
            title: '负载均衡,价格总览,配置清单',
            keywords: '京负载均衡,价格总览,配置清单',
            description: '登录后访问以获取更准确价格；按配置付费产品仅提供价格估算功能，具体价格以实际使用情况为准；实时库存及供给情况请登录购买页了解。'
          }
        },
        {
          path: 'calDataBase',
          name: 'DataBase',
          component: r => require.ensure([], () => r(require('@/components/calculator/DataBase')), 'DataBase'),
          meta: {
            isEn: true,
            title: '云数据库MySQL,价格总览,配置清单',
            keywords: '京东云、云数据库MySQL,价格总览,配置清单',
            description: '登录后访问以获取更准确价格；按配置付费产品仅提供价格估算功能，具体价格以实际使用情况为准；实时库存及供给情况请登录购买页了解。'
          }
        },
        {
          path: 'calCache',
          name: 'Cache',
          component: r => require.ensure([], () => r(require('@/components/calculator/Cache')), 'Cache'),
          meta: {
            isEn: true,
            title: '云缓存,价格总览,配置清单',
            keywords: '云缓存,价格总览,配置清单',
            description: '登录后访问以获取更准确价格；按配置付费产品仅提供价格估算功能，具体价格以实际使用情况为准；实时库存及供给情况请登录购买页了解。'
          }
        },
      ]
    },
    {
      path: 'activity',
      component: r => require.ensure([], () => r(require('@/components/activity/commonAct')), 'commonAct'),
      redirect: '/',
      children: [{
          path: 'tech-meetup/beijing201903',
          name: 'beijing201903',
          component: r => require.ensure([], () => r(require('@/components/activity/techSalon')), 'beijing201903'),
          meta: {
            isEn: false,
            title: 'Cloud Native时代的应用之路与开源创新',
            keywords: 'Cloud Native时代的应用之路与开源创新',
            description: 'Cloud Native时代的应用之路与开源创新',
            isabsolute: true
          }
        },
        {
          path: ':url',
          name: 'staticSetting-index',
          component: r => require.ensure([], () => r(require('@/components/jdcnews/staticSetting')), 'staticSetting-index'),
          meta: {
            isEn: false,
            isabsolute: true,
            title: '京东云活动-京东云',
            keywords: '京东云,京东电商云,京东数据云, 京东物流云,京东智能云,京东产业云,京东云服务,京东云计算,电商云,数据云, 物流云,智能云,产业云,云解决方案',
            description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀,致力于打造社会化的云平台,培育开放的云生态,向全社会提供稳定、安全、便捷的云服务'
          }
        }
      ]
    },
    {
      path: 'case',
      component: r => require.ensure([], () => r(require('@/components/jdccase/Case')), 'case'),
      redirect: '/case/list',
      meta: {
        isabsolute: true,
        isEn: true,
        title: '客户案例-京东云',
        keywords: '京东云、大数据、云计算、云存储、云主机、云服务器、网站备案',
        description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀，为广大用户和个人站长提供稳定、安全、便捷的多种解决方案，预见无限可能'
      },
      children: [{
        path: 'list',
        component: r => require.ensure([], () => r(require('@/components/jdccase/caseList')), 'caseList'),
        meta: {
          isEn: true,
          title: '客户案例-京东云',
          keywords: '京东云,京东电商云,京东数据云, 京东物流云,京东智能云,京东产业云,京东云服务,京东云计算,电商云,数据云, 物流云,智能云,产业云,云解决方案',
          description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀,致力于打造社会化的云平台,培育开放的云生态,向全社会提供稳定、安全、便捷的云服务',
          isabsolute: true
        }
      }, {
        path: 'detail/:id',
        name: 'caseDetail',
        component: r => require.ensure([], () => r(require('@/components/jdccase/caseDetail')), 'caseDetail'),
        meta: {
          isEn: true,
          title: '客户案例-京东云',
          keywords: '京东云,京东电商云,京东数据云, 京东物流云,京东智能云,京东产业云,京东云服务,京东云计算,电商云,数据云, 物流云,智能云,产业云,云解决方案',
          description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀,致力于打造社会化的云平台,培育开放的云生态,向全社会提供稳定、安全、便捷的云服务'
        }
      }]
    },
    {
      path: 'maintain',
      component: r => require.ensure([], () => r(require('@/components/public/maintain')), 'maintain'),
      meta: {
        isEn: true,
        title: '页面维护中-京东云-预见无限可能',
        keywords: '京东云、大数据、云计算、云存储、云主机、云服务器、网站备案',
        description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀，为广大用户和个人站长提供稳定、安全、便捷的多种解决方案，预见无限可能'
      }
    },
    // 新增产品概览页20180330 by lishiling4
    {
      path: 'productsOverView',
      component: r => require.ensure([], () => r(require('@/components/jdProducts/productsList')), 'productsOverView'),
      meta: {
        isabsolute: true,
        isEn: true,
        title: '产品列表_京东云',
        keywords: '云主机,云硬盘,云存储,域名购买,网站备案',
        description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀，为广大用户提供安全稳定的云主机、BGP多线带宽、云存储、大数据等服务。'
      }
    },
    //京东云定价
    {
      path: 'pricing',
      component: r => require.ensure([], () => r(require('@/components/price/price')), 'price'),
      meta: {
        isabsolute: true,
        title: "京东云定价-京东云",
        keywords: '计费模式,产品定价,付费规则',
        description: '京东云定价帮您全面了解京东云定价原则，云产品价格信息，并且预估上云成本。'
      }
    },
    //京东云关于我们
    {
      path: 'aboutus',
      component: r => require.ensure([], () => r(require('@/components/jdcaboutus/aboutus')), 'aboutus'),
      meta: {
        isabsolute: false,
        isEn: true,
        title: '了解京东云_京东云',
        keywords: '关于京东云，京东云介绍，京东云优势，京东云发展里程碑，京东云资质',
        description: '关于京东云的相关介绍，京东云优势描述，京东云的发展里程碑以及京东云所获取的资质认证。'
      }
    }
  ]