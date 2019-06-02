module.exports =  [
    {
        path: 'news',
        component: r => require.ensure([], () => r(require('@/components/jdcnews/new')), 'news'),
        redirect: '/news/list',
        meta: {
          isabsolute: true,
          isEn: true,
          title: '新闻中心-京东云',
          keywords: '京东云、大数据、云计算、云存储、云主机、云服务器、网站备案',
          description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀，为广大用户和个人站长提供稳定、安全、便捷的多种解决方案，预见无限可能'
        },
        children: [{
            path: 'list',
            name: 'newsList',
            component: r => require.ensure([], () => r(require('@/components/jdcnews/newsList')), 'newsList'),
            meta: {
              isEn: true,
              title: '新闻中心-京东云',
              keywords: '京东云,京东电商云,京东数据云, 京东物流云,京东智能云,京东产业云,京东云服务,京东云计算,电商云,数据云, 物流云,智能云,产业云,云解决方案',
              description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀,致力于打造社会化的云平台,培育开放的云生态,向全社会提供稳定、安全、便捷的云服务',
              isabsolute: true
            }
          },
          {
            path: 'detail/:id',
            name: 'newsDetail',
            component: r => require.ensure([], () => r(require('@/components/jdcnews/newsDetail')), 'newsDetail'),
            meta: {
              isEn: true,
              title: '新闻中心-京东云',
              keywords: '京东云,京东电商云,京东数据云, 京东物流云,京东智能云,京东产业云,京东云服务,京东云计算,电商云,数据云, 物流云,智能云,产业云,云解决方案',
              description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀,致力于打造社会化的云平台,培育开放的云生态,向全社会提供稳定、安全、便捷的云服务'
            }
          }, {
            path: 'journalMay',
            name: 'journalMay',
            component: r => require.ensure([], () => r(require('@/components/jdcnews/journalMay')), 'journalMay'),
            meta: {
              isEn: true,
              title: '电子期刊5月-京东云',
              keywords: '京东云,京东电商云,京东数据云, 京东物流云,京东智能云,京东产业云,京东云服务,京东云计算,电商云,数据云, 物流云,智能云,产业云,云解决方案',
              description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀,致力于打造社会化的云平台,培育开放的云生态,向全社会提供稳定、安全、便捷的云服务'
            }
          },
          {
            path: 'journalJun',
            name: 'journalJun',
            component: r => require.ensure([], () => r(require('@/components/jdcnews/journalJun')), 'journalJun'),
            meta: {
              isEn: true,
              title: '电子期刊6月-京东云',
              keywords: '京东云,京东电商云,京东数据云, 京东物流云,京东智能云,京东产业云,京东云服务,京东云计算,电商云,数据云, 物流云,智能云,产业云,云解决方案',
              description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀,致力于打造社会化的云平台,培育开放的云生态,向全社会提供稳定、安全、便捷的云服务'
            }
          },
          {
            path: 'journalJuly',
            name: 'journalJuly',
            component: r => require.ensure([], () => r(require('@/components/jdcnews/journalJuly')), 'journalJuly'),
            meta: {
              isEn: true,
              title: '电子期刊7月-京东云',
              keywords: '京东云,京东电商云,京东数据云, 京东物流云,京东智能云,京东产业云,京东云服务,京东云计算,电商云,数据云, 物流云,智能云,产业云,云解决方案',
              description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀,致力于打造社会化的云平台,培育开放的云生态,向全社会提供稳定、安全、便捷的云服务'
            }
          },
          {
            path: 'journalAugust',
            name: 'journalAugust',
            component: r => require.ensure([], () => r(require('@/components/jdcnews/journalAugust')), 'journalAugust'),
            meta: {
              isEn: true,
              title: '电子期刊8月-京东云'
            }
          },
          {
            path: 'journalSeptember',
            name: 'journalSeptember',
            component: r => require.ensure([], () => r(require('@/components/jdcnews/journalSeptember')), 'journalSeptember'),
            meta: {
              isEn: true,
              title: '电子期刊9月-京东云'
            }
          },
          {
            path: 'journalOctober',
            name: 'journalOctober',
            component: r => require.ensure([], () => r(require('@/components/jdcnews/journalOctober')), 'journalOctober'),
            meta: {
              isEn: true,
              title: '电子期刊10月-京东云'
            }
          },
          {
            path: 'subscription',
            name: 'subscription',
            component: r => require.ensure([], () => r(require('@/components/jdcnews/subscription')), 'subscription'),
            meta: {
              isEn: true,
              title: '订阅表单页-京东云',
              keywords: '京东云,京东电商云,京东数据云, 京东物流云,京东智能云,京东产业云,京东云服务,京东云计算,电商云,数据云, 物流云,智能云,产业云,云解决方案',
              description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀,致力于打造社会化的云平台,培育开放的云生态,向全社会提供稳定、安全、便捷的云服务'
            }
          }, {
            path: 'subscriptionSuccess',
            name: 'subscriptionSuccess',
            component: r => require.ensure([], () => r(require('@/components/jdcnews/subscriptionSuccess')), 'subscriptionSuccess'),
            meta: {
              isEn: true,
              title: '订阅成功页-京东云',
              keywords: '京东云,京东电商云,京东数据云, 京东物流云,京东智能云,京东产业云,京东云服务,京东云计算,电商云,数据云, 物流云,智能云,产业云,云解决方案',
              description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀,致力于打造社会化的云平台,培育开放的云生态,向全社会提供稳定、安全、便捷的云服务'
            }
          }, {
            path: 'treatment',
            name: 'treatment',
            component: r => require.ensure([], () => r(require('@/components/jdcnews/treatment')), 'treatment'),
            meta: {
              isEn: true,
              title: '优享礼遇表单-京东云',
              keywords: '京东云,京东电商云,京东数据云, 京东物流云,京东智能云,京东产业云,京东云服务,京东云计算,电商云,数据云, 物流云,智能云,产业云,云解决方案',
              description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀,致力于打造社会化的云平台,培育开放的云生态,向全社会提供稳定、安全、便捷的云服务'
            }
          }, {
            path: 'treatmentSuccess',
            name: 'treatmentSuccess',
            component: r => require.ensure([], () => r(require('@/components/jdcnews/treatmentSuccess')), 'treatmentSuccess'),
            meta: {
              isEn: true,
              title: '优享礼遇成功页-京东云',
              keywords: '京东云,京东电商云,京东数据云, 京东物流云,京东智能云,京东产业云,京东云服务,京东云计算,电商云,数据云, 物流云,智能云,产业云,云解决方案',
              description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀,致力于打造社会化的云平台,培育开放的云生态,向全社会提供稳定、安全、便捷的云服务'
            }
          }, {
            path: ':url',
            name: 'staticSetting',
            component: r => require.ensure([], () => r(require('@/components/jdcnews/staticSetting')), 'staticSetting'),
            meta: {
              isEn: true,
              isabsolute: true,
              title: '电子期刊-京东云',
              keywords: '京东云,京东电商云,京东数据云, 京东物流云,京东智能云,京东产业云,京东云服务,京东云计算,电商云,数据云, 物流云,智能云,产业云,云解决方案',
              description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀,致力于打造社会化的云平台,培育开放的云生态,向全社会提供稳定、安全、便捷的云服务'
            }
          }
        ]
      },
]