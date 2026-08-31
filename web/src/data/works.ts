// 项目数据（双语）。各板块 → 点击展开项目详情。
// 纯数据驱动：增删板块 / 作品只改本文件，Works.jsx 仅负责渲染。
//
// 板块字段：
//   id        唯一标识（用于 framer layoutId 共享元素动画）
//   no        编号 '01'…'05'
//   title     板块标题
//   tagline   索引行右侧一句话
//   items[]   扁平作品列表：{ name, meta?, tags?, link? }
//             点击 item 弹出全屏详情，可补充可选媒体/文案字段：
//             { image?, video?, year?, desc? }（缺省时媒体用占位、简介回退 meta/标签）
//   groups[]  分组作品（与 items 二选一）：{ heading, items: string[] }
//   awards[]  奖项 chip（可选）
//   footer    底部技术/备注一行（可选）

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export const WORKS: Record<'zh' | 'en', WorksLang> = {
  zh: {
    title: '增长运营项目',
    closeLabel: '返回',
    openLabel: '展开作品',
    hint: '继续下滑',
    awardsLabel: '获奖',
    visitLabel: '查看完整项目',
    detailPlaceholder: '你的作品介绍',
    phImageLabel: '图片 / 视频',
    phButtonLabel: '跳转按钮',
    countLabel: (n) => `${n} 件作品`,
    sections: [
      {
        id: 'project-1',
        no: '01',
        title: '海外潮玩二手交易 App 增长策略研究',
        tagline: '海外增长｜用户研究｜竞品分析｜信任转化｜KOL/KOC',
        items: [
          {
            name: '海外潮玩二手交易 App 增长策略研究',
            meta: 'Overseas Designer Toy Resale App Growth Strategy',
            slug: 'overseas-toy-growth',
            tags: [
              '个人独立研究：整理19项财报、监管、平台规则与社区公开证据',
              '拆解内容发现、社区验证、下单与履约路径，定位真假、价格及交易信任阻碍',
              '规划 TikTok / Instagram / Reddit / Discord、KOL/KOC 与用户裂变方案',
              '用 AARRR、RICE、预算分配与跨团队协作图形成可执行增长闭环',
            ],
          },
        ],
      },
      {
        id: 'project-2',
        no: '02',
        title: 'ZUS Everywhere 新业务上市与内容增长',
        tagline: '新品上市｜Instagram｜英文内容｜渠道协同｜数据复盘',
        items: [
          {
            name: 'ZUS Everywhere 新业务上市与 Instagram 内容增长',
            meta: 'New Business Launch & Instagram Content Growth',
            slug: 'zus-everywhere',
            tags: [
              '参与 ZUS 从门店咖啡向 RTD / FMCG 新业务延展的内容冷启动',
              '参与完成 50 条 Instagram 内容与 15+ 轮数据复盘迭代',
              '建立从新品认知、场景兴趣到购买入口的 Content–Commerce 路径',
              '配合线上首发与 FamilyMart 线下传播；项目期账号粉丝规模达到 1.1w+',
            ],
          },
        ],
      },
      {
        id: 'project-3',
        no: '03',
        title: 'AI资讯追踪App多渠道增长与转化复盘',
        tagline: '价格调研｜漏斗分析｜KOL/KOC｜内容A/B测试｜预算优化',
        items: [
          {
            name: 'AI资讯追踪 App 多渠道增长与转化复盘',
            meta: 'AI Information Product Multi-channel Growth',
            slug: 'ai-news-dashboard',
            tags: [
              '围绕“曝光—访问—注册—首次专题创建”拆解漏斗并搭建轻量运营看板',
              '结合用户反馈与价格问卷，分析付费意愿、价格接受度及首次体验阻碍',
              '筛选金融、AI垂类KOL/KOC，并对标题、首图与CTA开展内容A/B测试',
              '投放期累计新增注册环比提升50%、首次专题创建率相对提升15%，据此优化渠道预算',
            ],
          },
        ],
      },
    ],
  },
  en: {
    title: 'Growth Operations Projects',
    closeLabel: 'Back',
    openLabel: 'Explore',
    hint: 'Keep scrolling',
    awardsLabel: 'Awards',
    visitLabel: 'Open full case',
    detailPlaceholder: 'Your work description',
    phImageLabel: 'Image / Video',
    phButtonLabel: 'Link button',
    countLabel: (n) => `${n} works`,
    sections: [
      {
        id: 'project-1',
        no: '01',
        title: 'Overseas Designer Toy Resale App Growth Strategy',
        tagline: 'Overseas Growth · User Research · Competitor Analysis · Trust Conversion',
        items: [
          {
            name: 'Overseas Designer Toy Resale App Growth Strategy',
            meta: '海外潮玩二手交易 App 增长策略研究',
            slug: 'overseas-toy-growth',
            tags: [
              'Independent study built from 19 financial, regulatory, platform, and community evidence records',
              'Mapped discovery, community validation, checkout, and fulfilment barriers',
              'Designed TikTok, Instagram, Reddit, Discord, KOL/KOC, and referral operations',
              'Connected AARRR, RICE, budget allocation, and cross-functional delivery planning',
            ],
          },
        ],
      },
      {
        id: 'project-2',
        no: '02',
        title: 'ZUS Everywhere New Business Launch & Content Growth',
        tagline: 'Product Launch · Instagram · English Content · Retail Coordination · Data Review',
        items: [
          {
            name: 'ZUS Everywhere New Business Launch & Instagram Growth',
            meta: 'ZUS Everywhere 新业务上市与内容增长',
            slug: 'zus-everywhere',
            tags: [
              'Supported the content launch as ZUS expanded from cafes into RTD and FMCG products',
              'Contributed to 50 Instagram assets and 15+ rounds of performance-led iteration',
              'Built a Content–Commerce journey from product discovery to purchase access',
              'Supported online launch and FamilyMart retail communication; the account reached 11k+ during the project',
            ],
          },
        ],
      },
      {
        id: 'project-3',
        no: '03',
        title: 'AI Information App Multi-channel Growth & Conversion Review',
        tagline: 'Pricing Research · Funnel Analysis · KOL/KOC · Content A/B Tests · Budget Review',
        items: [
          {
            name: 'AI Information App Multi-channel Growth & Conversion Review',
            meta: 'AI资讯追踪App多渠道增长与转化复盘',
            slug: 'ai-news-dashboard',
            tags: [
              'Mapped the exposure-to-first-topic funnel and built a lightweight operations dashboard',
              'Combined user feedback and pricing surveys to assess willingness to pay, acceptable pricing, and activation barriers',
              'Screened finance and AI creators, then tested titles, covers, and CTAs across comparable windows',
              'Campaign registrations increased 50% WoW and first-topic creation rate rose 15% relatively, informing budget reallocation',
            ],
          },
        ],
      },
    ],
  },
}

// 板块配图（横向画廊每张卡片左侧的整高封面）。放到 public/works/covers/ 下。
// 缺图时左栏用大编号渐变占位，放入图片后自动点亮。
export const SECTION_COVERS: Record<string, string> = {
  'project-1': `${import.meta.env.BASE_URL}projects/overseas-toy-growth-project-v2/designer-toy-hero-v2.png`,
  'project-2': `${import.meta.env.BASE_URL}works/covers/zus-everywhere.jpg`,
  'project-3': `${import.meta.env.BASE_URL}works/covers/sohu-dashboard.png`,
}

// 统计一个板块的作品数（items 或 groups 求和），用于索引行 hover 显示
export function sectionCount(section: WorkSection): number {
  if (section.items) return section.items.length
  if (section.groups) return section.groups.reduce((n, g) => n + g.items.length, 0)
  return 0
}
