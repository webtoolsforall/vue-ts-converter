module.exports =  [
    {
        path: 'service',
        redirect: '/service/jdcservice',
        component: r => require.ensure([], () => r(require('@/components/service/commonService')), 'commonService'),
        children: [{
            path: 'jdcservice',
            component: r => require.ensure([], () => r(require('@/components/service/service')), 'service'),
            meta: {
              isEn: true,
              isabsolute: true,
              title: '特色服务-京东云',
              keywords: '京东云,京东电商云,京东数据云, 京东物流云,京东智能云,京东产业云,京东云服务,京东云计算,电商云,数据云, 物流云,智能云,产业云,云解决方案',
              description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀,致力于打造社会化的云平台,培育开放的云生态,向全社会提供稳定、安全、便捷的云服务'
            }
          },
          {
            path: 'bestService',
            component: r => require.ensure([], () => r(require('@/components/service/bestService')), 'bestService'),
            meta: {
              isabsolute: true,
              isEn: true,
              title: '金牌服务-京东云',
              keywords: '京东云,京东电商云,京东数据云, 京东物流云,京东智能云,京东产业云,京东云服务,京东云计算,电商云,数据云, 物流云,智能云,产业云,云解决方案',
              description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀,致力于打造社会化的云平台,培育开放的云生态,向全社会提供稳定、安全、便捷的云服务'
            }
          },
          {
            path: 'promotionRebate',
            component: r => require.ensure([], () => r(require('@/components/service/promotionRebate')), 'promotionRebate'),
            meta: {
              isEn: false,
              title: '推广返佣-京东云',
              keywords: '京东云,京东电商云,京东数据云, 京东物流云,京东智能云,京东产业云,京东云服务,京东云计算,电商云,数据云, 物流云,智能云,产业云,云解决方案',
              description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀,致力于打造社会化的云平台,培育开放的云生态,向全社会提供稳定、安全、便捷的云服务'
            }
          },
          {
            path: 'forrester',
            component: r => require.ensure([], () => r(require('@/components/service/forrester')), 'forrester'),
            meta: {
              isabsolute: true,
              isEn: true,
              title: '京东云18个月发力晋级 挺进中国云计算一流行列',
              keywords: '京东云18个月发力晋级 挺进中国云计算一流行列',
              description: '报告显示，近年来京东云在云计算市场呈现出快速增长的趋势。Forrester对京东云在产品能力、战略布局、市场表现等方面进行了专业测评，值得一提的是，在战略布局方面京东云得分接近满分成绩，此外在产品能力和市场表现方面也均获得良好评价。'
            }
          }, {
            path: ':url',
            name: 'staticSetting-service',
            component: r => require.ensure([], () => r(require('@/components/jdcnews/staticSetting')), 'staticSetting-service'),
            meta: {
              isEn: false,
              isabsolute: true,
              title: '服务-京东云',
              keywords: '京东云,京东电商云,京东数据云, 京东物流云,京东智能云,京东产业云,京东云服务,京东云计算,电商云,数据云, 物流云,智能云,产业云,云解决方案',
              description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀,致力于打造社会化的云平台,培育开放的云生态,向全社会提供稳定、安全、便捷的云服务'
            }
          }
        ]
      },
]