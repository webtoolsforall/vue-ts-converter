module.exports =  [
    {
        path: 'partner',
        component: r => require.ensure([], () => r(require('@/components/partner/partner')), 'partner'),
        redirect: '/partner/index',
        children: [{
            path: 'index',
            component: r => require.ensure([], () => r(require('@/components/partner/partnerIndexV2')), 'index'),
            meta: {
              isabsolute: true,
              isEn: false,
              title: '合作伙伴-京东云',
              keywords: '基础服务合作伙伴,云安全合作伙伴,云服务合作伙伴,云监控合作伙伴',
              description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀，为广大用户和个人站长提供稳定、安全、便捷的多种解决方案，预见无限可能'
            }
          },
          {
            path: 'company',
            name: 'company',
            component: r => require.ensure([], () => r(require('@/components/partner/cooperationPlan/company')), 'company'),
            meta: {
              isabsolute: true,
              isEn: false,
              title: '京东云合作伙伴_合作与动态-京东云',
              keywords: '合作伙伴,解决方案提供商,软件开发商,云服务提供商,销售代理商',
              description: '无论您是解决方案提供商、软件开发商，还是云服务提供商、销售代理商，我们提供丰富资源支持合作伙伴业务成长。打造生态体系合作共赢，京东云愿与合作伙伴共同成长。'
            }
          },
          {
            path: 'ISV',
            name: 'ISV',
            component: r => require.ensure([], () => r(require('@/components/partner/cooperationPlan/ISV')), 'ISV'),
            meta: {
              isabsolute: true,
              isEn: false,
              title: '京东云合作伙伴_合作与动态-京东云',
              keywords: '合作伙伴,解决方案提供商,软件开发商,云服务提供商,销售代理商',
              description: '无论您是解决方案提供商、软件开发商，还是云服务提供商、销售代理商，我们提供丰富资源支持合作伙伴业务成长。打造生态体系合作共赢，京东云愿与合作伙伴共同成长。'
            }
          },
          {
            path: 'place',
            name: 'place',
            component: r => require.ensure([], () => r(require('@/components/partner/cooperationPlan/place')), 'place'),
            meta: {
              isabsolute: true,
              isEn: false,
              title: '京东云合作伙伴_合作与动态-京东云',
              keywords: '合作伙伴,解决方案提供商,软件开发商,云服务提供商,销售代理商',
              description: '无论您是解决方案提供商、软件开发商，还是云服务提供商、销售代理商，我们提供丰富资源支持合作伙伴业务成长。打造生态体系合作共赢，京东云愿与合作伙伴共同成长。'
            }
          },
          {
            path: 'product',
            name: 'product',
            component: r => require.ensure([], () => r(require('@/components/partner/cooperationPlan/product')), 'product'),
            meta: {
              isabsolute: true,
              isEn: false,
              title: '京东云合作伙伴_合作与动态-京东云',
              keywords: '合作伙伴,解决方案提供商,软件开发商,云服务提供商,销售代理商',
              description: '无论您是解决方案提供商、软件开发商，还是云服务提供商、销售代理商，我们提供丰富资源支持合作伙伴业务成长。打造生态体系合作共赢，京东云愿与合作伙伴共同成长。'
            }
          },
          {
            path: 'reg',
            name: 'reg',
            component: r => require.ensure([], () => r(require('@/components/partner/partnerRegV2')), 'regV2'),
            meta: {
              isEn: false,
              title: '合作伙伴申请-京东云',
              keywords: '基础服务合作伙伴,云安全合作伙伴,云服务合作伙伴,云监控合作伙伴',
              description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀，为广大用户和个人站长提供稳定、安全、便捷的多种解决方案，预见无限可能'
            }
          }, {
            path: 'basic',
            name: 'basic',
            component: r => require.ensure([], () => r(require('@/components/partner/partnerBasic')), 'basic'),
            meta: {
              isabsolute: true,
              isEn: true,
              title: '合作伙伴-京东云',
              keywords: '基础服务合作伙伴,云安全合作伙伴,云服务合作伙伴,云监控合作伙伴',
              description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀，为广大用户和个人站长提供稳定、安全、便捷的多种解决方案，预见无限可能'
            }
          }
        ]
      },
]