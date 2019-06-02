module.exports =  [
    {
        path: 'solutions',
        component: r => require.ensure([], () => r(require('@/components/solution/commonSolution')), 'solution'),
        redirect: '/solutions/tgy',
        children: [{
            path: 'database',
            component: r => require.ensure([], () => r(require('@/components/solution/database')), 'database'),
            meta: {
              isEn: false,
              title: '云数据库场景化应用实战方案',
              keywords: '云数据库场景化应用实战方案，云数据库 MySQL，SQL Server，MongoDB，MariaDB，Percona，TiDB，分布式关系型数据库 DRDS，电商高并发，金融行业安全灾备，网站快速搭建，游戏高稳定，大数据分析',
              description: '京东云数据库支持多种数据库类型，包括：云数据库RDS、云数据库MongoDB、分布式数据库DRDS、分布式数据库TiDB等，应用于电商高并发、金融行业安全灾备、网站快速搭建、游戏高稳定、大数据分析等场景。'
            }
          },
          {
            path: 'safe',
            name: 'safe',
            component: r => require.ensure([], () => r(require('@/components/smartCity/safe')), 'safe'),
            meta: {
              isEn: false,
              title: '企业级应用安全纵深防御_安全解决方案_京东云',
              keywords: '企业级安全解决方案，DDos攻击，CC攻击，黑客入侵，撞库，网页篡改，恶意爬虫，网页挂马',
              description: '京东云基于多年来为京东商城提供安全保障的积累，为您的企业建立起全方位安全防护体系，帮你解决DDos攻击、CC攻击、黑客入侵、撞库、网页篡改、恶意爬虫、网页挂马等问题'
            }
          },
          {
            path: 'oss-cdn',
            component: r => require.ensure([], () => r(require('@/components/solution/oss-cdn')), 'oss-cdn'),
            meta: {
              isEn: false,
              title: '内容存储及分发网络加速解决方案_京东云',
              keywords: '京东云，分布式对象存储，OSS，CDN，内容分发，热点数据加速，视频点播，视频直播一站式服务',
              description: '京东云以大规模分布式对象存储（OSS）服务为基础，配合CDN加速内容分发服务，可为客户提供海量文件存储备份，热点数据加速分发和视频点播等服务。还可以通过分布式实时转码技术，实现视频直播一站式服务。'
            }
          }, {
            path: 'loc',
            component: r => require.ensure([], () => r(require('@/components/solution/loc')), 'loc'),
            meta: {
              isEn: false,
              title: '物流云解决方案-京东云',
              keywords: '京东云,京东电商云,京东数据云, 京东物流云,京东智能云,京东产业云,京东云服务,京东云计算,电商云,数据云, 物流云,智能云,产业云,云解决方案',
              description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀,致力于打造社会化的云平台,培育开放的云生态,向全社会提供稳定、安全、便捷的云服务'
            }
          }, {
            path: 'locjwms',
            component: r => require.ensure([], () => r(require('@/components/solution/locjwms')), 'locjwms'),
            meta: {
              isEn: false,
              title: '物流云解决方案-京东云',
              keywords: '京东云,京东电商云,京东数据云, 京东物流云,京东智能云,京东产业云,京东云服务,京东云计算,电商云,数据云, 物流云,智能云,产业云,云解决方案',
              description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀,致力于打造社会化的云平台,培育开放的云生态,向全社会提供稳定、安全、便捷的云服务'
            }
          },
          {
            path: 'dsy',
            component: r => require.ensure([], () => r(require('@/components/solution/dsy')), 'dsy'),
            meta: {
              isEn: false,
              title: '电商云解决方案-京东云',
              keywords: '京东云,京东电商云,京东数据云, 京东物流云,京东智能云,京东产业云,京东云服务,京东云计算,电商云,数据云, 物流云,智能云,产业云,云解决方案',
              description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀,致力于打造社会化的云平台,培育开放的云生态,向全社会提供稳定、安全、便捷的云服务'
            }
          }, {
            path: 'yd',
            component: r => require.ensure([], () => r(require('@/components/solution/yd')), 'yd'),
            meta: {
              isEn: false,
              title: '京东云鼎-京东云',
              keywords: '京东云,京东电商云,京东数据云, 京东物流云,京东智能云,京东产业云,京东云服务,京东云计算,电商云,数据云, 物流云,智能云,产业云,云解决方案',
              description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀,致力于打造社会化的云平台,培育开放的云生态,向全社会提供稳定、安全、便捷的云服务'
            }
          }, {
            path: 'zny',
            component: r => require.ensure([], () => r(require('@/components/solution/zny')), 'zny'),
            meta: {
              isEn: true,
              title: '智能云解决方案-京东云',
              keywords: '京东云,京东电商云,京东数据云, 京东物流云,京东智能云,京东产业云,京东云服务,京东云计算,电商云,数据云, 物流云,智能云,产业云,云解决方案',
              description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀,致力于打造社会化的云平台,培育开放的云生态,向全社会提供稳定、安全、便捷的云服务'
            }
          }, {
            path: 'cyy',
            component: r => require.ensure([], () => r(require('@/components/solution/cyy')), 'cyy'),
            meta: {
              isEn: true,
              title: '产业云解决方案-京东云',
              keywords: '京东云,京东电商云,京东数据云, 京东物流云,京东智能云,京东产业云,京东云服务,京东云计算,电商云,数据云, 物流云,智能云,产业云,云解决方案',
              description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀,致力于打造社会化的云平台,培育开放的云生态,向全社会提供稳定、安全、便捷的云服务'
            }
          }, {
            path: 'financial',
            component: r => require.ensure([], () => r(require('@/components/solution/financial')), 'financial'),
            meta: {
              isEn: false,
              title: '金融行业解决方案-京东云',
              keywords: '京东云,京东电商云,京东数据云, 京东物流云,京东智能云,京东产业云,京东云服务,京东云计算,电商云,数据云, 物流云,智能云,产业云,云解决方案',
              description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀,致力于打造社会化的云平台,培育开放的云生态,向全社会提供稳定、安全、便捷的云服务'
            }
          }, {
            path: 'b2c',
            component: r => require.ensure([], () => r(require('@/components/solution/b2c')), 'b2c'),
            meta: {
              isEn: false,
              title: 'JCStore(云店)-京东云',
              keywords: '京东云,京东电商云,京东数据云, 京东物流云,京东智能云,京东产业云,京东云服务,京东云计算,电商云,数据云, 物流云,智能云,产业云,云解决方案',
              description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀,致力于打造社会化的云平台,培育开放的云生态,向全社会提供稳定、安全、便捷的云服务'
            }
          }, {
            path: 'b2b',
            component: r => require.ensure([], () => r(require('@/components/solution/b2b')), 'b2b'),
            meta: {
              isEn: false,
              title: 'JCMall(云贸平台)-京东云',
              keywords: '京东云,京东电商云,京东数据云, 京东物流云,京东智能云,京东产业云,京东云服务,京东云计算,电商云,数据云, 物流云,智能云,产业云,云解决方案',
              description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀,致力于打造社会化的云平台,培育开放的云生态,向全社会提供稳定、安全、便捷的云服务'
            }
          }, {
            path: 'blockchain',
            component: r => require.ensure([], () => r(require('@/components/solution/blockchain')), 'blockchain'),
            meta: {
              isEn: false,
              title: '区块链云解决方案-京东云',
              keywords: '京东云,应用托管,基础服务,弹性扩展,简单易用,安全防护,贴心服务',
              description: '京东云整合各类云资源,提供稳定可靠服务.全方位业务托管,减轻IT运维压力.提供全方面安全防护策略.保障业务数据安全.弹性升级,轻松应对业务规模变化'
            }
          }, {
            path: 'website',
            component: r => require.ensure([], () => r(require('@/components/solution/newwebsite')), 'website'),
            meta: {
              isEn: true,
              title: '网站解决方案_企业网站解决方案_个人建站服务_免费备案解析-京东云',
              keywords: '网站解决方案,企业网站解决方案,建站服务,备案解析',
              description: '京东云为企业与个人用户提供“网站解决方案，个人建站服务，免费备案解析等一站式解决方案'
            }
          }, {
            path: 'xiaoyi',
            component: r => require.ensure([], () => r(require('@/components/solution/xiaoyi')), 'xiaoyi'),
            meta: {
              isEn: true,
              title: '京东小易-京东云',
              keywords: '京东云,应用托管,基础服务,弹性扩展,简单易用,安全防护,贴心服务',
              description: '京东云整合各类云资源,提供稳定可靠服务.全方位业务托管,减轻IT运维压力.提供全方面安全防护策略.保障业务数据安全.弹性升级,轻松应对业务规模变化'
            }
          }, {
            path: 'hybridcloud',
            component: r => require.ensure([], () => r(require('@/components/solution/hybridcloud')), 'hybridcloud'),
            meta: {
              isEn: true,
              title: '混合云解决方案-京东云',
              keywords: '京东云、大数据、云计算、云存储、云主机、云服务器、网站备案',
              description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀，为广大用户和个人站长提供稳定、安全、便捷的多种解决方案，预见无限可能'
            }
          }, {

            path: 'retail',
            component: r => require.ensure([], () => r(require('@/components/solution/newretail')), 'xiaoyi'),
            meta: {
              isEn: true,
              title: '泛零售解决方案-京东云',
              keywords: '京东云,应用托管,基础服务,弹性扩展,简单易用,安全防护,贴心服务',
              description: '京东云整合各类云资源,提供稳定可靠服务.全方位业务托管,减轻IT运维压力.提供全方面安全防护策略.保障业务数据安全.弹性升级,轻松应对业务规模变化'
            }
          },
          {
            path: 'enterprisecloud',
            component: r => require.ensure([], () => r(require('@/components/solution/qyCloud')), 'enterprisecloud'),
            meta: {
              isEn: true,
              title: '企业智享上云解决方案-京东云',
              keywords: '京东云,京东电商云,京东数据云, 京东物流云,京东智能云,京东产业云,京东云服务,京东云计算,电商云,数据云, 物流云,智能云,产业云,云解决方案',
              description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀,致力于打造社会化的云平台,培育开放的云生态,向全社会提供稳定、安全、便捷的云服务'
            }

          }, {
            path: 'retailTechForum',
            component: r => require.ensure([], () => r(require('@/components/solution/retailTechForum')), 'retailTechForum'),
            meta: {
              isabsolute: true,
              isEn: true,
              title: '无界零售云技术平台-京东云',
              keywords: '京东云,京东电商云,京东数据云, 京东物流云,京东智能云,京东产业云,京东云服务,京东云计算,电商云,数据云, 物流云,智能云,产业云,云解决方案',
              description: '京东云以京东在云计算、大数据、物联网等方面的多年技术积淀,致力于打造社会化的云平台,培育开放的云生态,向全社会提供稳定、安全、便捷的云服务'
            }
          },

        ]
      },
]