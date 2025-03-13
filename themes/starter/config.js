/**
 *另一个落地
 */
常量配置 = {
  //默认只显示Logo文字，如果设置了logo图片，会在文字界面显示图标
  STARTER_LOGO: 'images/starter/MOLA/1.svg', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ，菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: 'MOLA CRAFT', // 英雄区文字
  STARTER_HERO_TITLE_2: '不同种类和设计的工艺品。', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: 'xxx', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL：
    '', //英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: 'xxx', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: '', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  STARTER_HERO_PREVIEW_IMAGE: '/images/starter/hero/hero-image.webp', // 产品预览图 ，默认读取public目录下图片
  STARTER_HERO_BANNER_IMAGE: '', // 英雄区下方的全宽图

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: '登录',
  STARTER_NAV_BUTTON_1_URL: '/登录',

  STARTER_NAV_BUTTON_2_TEXT: '注册',
  STARTER_NAV_BUTTON_2_URL: '/注册',

  // 特性标记
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: '', // 特性
  STARTER_FEATURE_TEXT_1: '我们能做什么', // 特性
  STARTER_FEATURE_TEXT_2：
    “10000+ 不同种类和设计的工艺品。在 Mola Craft，您可以以工厂直销的价格获得以下定制产品，并获得一站式解决方案和可靠的服务。”，// 特性

  STARTER_FEATURE_1_TITLE_1: '自定义', // 特性1
  STARTER_FEATURE_1_TEXT_1: '种类繁多的产品，不同工艺的定制礼品。', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: '了解更多', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: '', // 特性1

  STARTER_FEATURE_2_TITLE_1: '出厂价', // 特性2
  STARTER_FEATURE_2_TEXT_1: '在过去 7 年中，我们投资了 3 家不同的工厂，以加强我们的生产能力，并为客户提供直接的工厂价格。', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: '了解更多', // 特性2
  STARTER_FEATURE_2_按钮_URL：
    '', // 特性2

  STARTER_FEATURE_3_TITLE_1: '质量保证', // 特性3
  STARTER_FEATURE_3_TEXT_1: '我们有在线质检部门检查所有产品的质量，不允许向客户交付有缺陷的产品。', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: '了解更多', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: '', // 特性3

  STARTER_FEATURE_4_TITLE_1: '一站式物流解决方案', // 特性4
  STARTER_FEATURE_4_TEXT_1: '我们还有专业的销售团队跟进您的报价和订单，并在订单完成后提供一站式物流解决方案。', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: '了解更多', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: '', // 特性4

  // 首页ABOUT被锁定
  STARTER_ABOUT_ENABLE: true, // 关于区块开关
  STARTER_ABOUT_TITLE：“关于 MOLA CRAFT”，
  STARTER_ABOUT_TEXT：
    '我们专注于定制工艺品和礼品超过 7 年。<br /> 我们拥有一支由 200 多名员工组成的生产团队，艺术团队和销售团队共有约 50 人。<br /> 因此，我们的工作语言是英语，您的所有报价和询问都将在同一工作日得到答复。<br />此外，我们的艺术家团队拥有 5 名以上员工，他们与销售团队在同一办公室工作，帮助我们的销售将您的想法或草图转化为可行的生产证明。<br />我们的团队将继续努力和聪明地工作，创造更多价值，帮助您赢得更多订单。', // <br /> 代表换行
  STARTER_ABOUT_BUTTON_TEXT：“了解更多”，
  STARTER_ABOUT_BUTTON_URL: '', // 这里可链接到关于我们的介绍
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1：'xxx'，
  STARTER_ABOUT_TIPS_2：'xxx'，
  STARTER_ABOUT_TIPS_3：'xxx'，

  // 房屋价格区块
  STARTER_PRICING_ENABLE: false, // 价格区块切换 ture / False
  STARTER_PRICING_TITLE: '价格表',
  STARTER_PRICING_TEXT_1: '很棒的定价计划',
  STARTER_PRICING_TEXT_2：
    '我们制定了灵活的付费模式，您可以自行选择。（NotionNext免费开源，这里仅限演示产品订阅付费功能，请勿下单购买！）',

  STARTER_PRICING_1_TITLE: '入门版',
  起始价格：'19.9'，
  STARTER_PRICING_1_PRICE_CURRENCY：'$'，
  STARTER_PRICING_1_PRICE_PERIOD：“每月”，
  STARTER_PRICING_1_HEADER：'功能点'，
  STARTER_PRICING_1_FEATURES: '所有的主题，免费更新，帮助手册', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_1_BUTTON_URL：
    'https://tangly1024.lemonsqueezy.com/checkout/buy/c1a38a65-362e-44c5-8065-733fee39eb54',

  STARTER_PRICING_2_TAG：“推荐”，
  STARTER_PRICING_2_TITLE: '基础版',
  起始价格 2 价格：'39.9'，
  STARTER_PRICING_2_PRICE_CURRENCY：'$'，
  STARTER_PRICING_2_PRICE_PERIOD：“每月”，
  STARTER_PRICING_2_HEADER：'功能点'，
  STARTER_PRICING_2_FEATURES: '包含入门版,项目源码,内部社区,技术咨询,SEO优化', // 中文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_2_BUTTON_URL：
    'https://tangly1024.lemonsqueezy.com/checkout/buy/590ad70a-c3b7-4caf-94ec-9ca27bde06d4'，

  STARTER_PRICING_3_TITLE: '高级版',
  起始价格：'59.9'，
  STARTER_PRICING_3_PRICE_CURRENCY：'$'，
  STARTER_PRICING_3_PRICE_PERIOD：“每月”，
  STARTER_PRICING_3_HEADER：'功能点'，
  STARTER_PRICING_3_FEATURES: '包含基础版,功能定制开发', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_3_BUTTON_URL：
    'https://tangly1024.lemonsqueezy.com/checkout/buy/df924d66-09dc-42a4-a632-a6b0c5cc4f28',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 评测区块开关
  STARTER_TESTIMONIALS_TITLE：“用户反馈”，
  STARTER_TESTIMONIALS_TEXT_1：“我们的用户怎么说”，
  STARTER_TESTIMONIALS_TEXT_2：
    “成千上万的客户选择 MOLACRAFT 定制工艺品和礼品。”
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改这里代码。
  STARTER_TESTIMONIALS_ITEMS：[
    {
      STARTER_TESTIMONIALS_ITEM_TEXT：
        '感谢大佬的方法。之前尝试过Super、Potion等国外的第三方平台，实现效果一般，个性化程度远不如这个方法，已经用起来了！',
      STARTER_TESTIMONIALS_ITEM_AVATAR：
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b %2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=集合&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&宽度=200',
      STARTER_TESTIMONIALS_ITEM_NICKNAME：'Ryan_G'，
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Ryan`Log 站长',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://blog.gaoran.xyz/'
    }，
    {
      STARTER_TESTIMONIALS_ITEM_TEXT：
        '很喜欢这个主题，本代码小白用三天台风假期搭建出来了，还根据大佬的教程弄了个域名，十分感谢，已请喝咖啡~',
      STARTER_TESTIMONIALS_ITEM_AVATAR：
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6 b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME：“Asenkits”，
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '阿森的百宝袋站长',
      STARTER_TESTIMONIALS_ITEM_URL：'https://asenkits.top/'
    }，
    {
      STARTER_TESTIMONIALS_ITEM_TEXT：
        呜呜呜，经过一个下午的努力，终于把博客部署好了啦，非常感谢Tangly1024大佬的框架和教程，这是我生前用过的最好用的博客框架┭┮﹏┭┮。从今天开始，我就可以在自己的博客里bb啦，(•̀ ω•́ )y',
      STARTER_TESTIMONIALS_ITEM_AVATAR：
        'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws。 com%2F6c096b44-beb9-48ee-8f92-1efdde47f3a3%2F338962f1-d352-49c7-9a1b-746e35a7005c%2F hf.png?table=块&id=ce5a48a9-d77a-4843-a3d9-a78cd4f794ce&spaceId=6c096b44-beb9-48e e-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME：'DWIND'，
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '且听风吟站长',
      STARTER_TESTIMONIALS_ITEM_URL：'https://www.dwind.top/'
    }，
    {
      STARTER_TESTIMONIALS_ITEM_TEXT：
        '感谢提供这么好的项目哈哈一直不知道怎么部署（其他项目之前好难好复杂）这个相对非常简单新手非常友好哦',
      STARTER_TESTIMONIALS_ITEM_AVATAR：
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3 e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '迪升disheng ',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'AI资源分享博客',
      STARTER_TESTIMONIALS_ITEM_URL：'https://blog.disheng.org/'
    }，
    {
      STARTER_TESTIMONIALS_ITEM_TEXT：
        '灰常感谢大佬的博客项目，能够将博客和理念结合起来，这一直是我期待的博客模式。',
      STARTER_TESTIMONIALS_ITEM_AVATAR：
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fafb21381-f51b-4fd0-9998-800dbeb64dbe%2Favatar.png?table=块&id=195935d2-0d8d-49fc-bd81-1db42ee50840&spaceId=6c096b44-beb9-48ee-8f92 -1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME：“AnJhon”，
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Anjhon 的博客站长',
      STARTER_TESTIMONIALS_ITEM_URL：'https://www.anjhon.top'
    }，
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: '用好久了，太感谢了',
      STARTER_TESTIMONIALS_ITEM_AVATAR：
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion -static.com%2Fe4f391d7-7d65-4c05-a82c-c6e2c40f06e4%2Fa2a7641a26b367608c6ef28ce9b7e983 _(2).png?table=block&id=a386eb0e-4c07-4b18-9ece-bba4e79ce21c&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2'，
      STARTER_TESTIMONIALS_ITEM_NICKNAME：“卢森”，
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'LUCEN 熬炼站长',
      STARTER_TESTIMONIALS_ITEM_URL：'https://www.lucenczz.top/'
    }
  ]，

  // 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块切换
  STARTER_FAQ_TITLE: '常见问题解答',
  STARTER_FAQ_TEXT_1: '有任何问题吗？请看这里',
  STARTER_FAQ_TEXT_2：“我们收集了常见的用户疑问”，

  STARTER_FAQ_1_QUESTION: 'NotionNext 有帮助文档吗？',
  STARTER_FAQ_1_答案：
    'NotionNext提供了<a href="https://docs.tangly1024.com/about" className="underline">帮助文档</a>，操作<a href="https://www.bilibili.com/video/BV1fM4y1L7Qi/" className="underline">演示视频</a>，以及<a href="https://docs.tangly1024.com/article/chat-c​​ommunity" className="underline">交流社区</a>来帮助您完成网站的搭建部署',

  STARTER_FAQ_2_QUESTION: '部署后要如何编写文章？',
  STARTER_FAQ_2_答案：
    '您可以在Notion中添加或修改类型为Post的页面，内容将被实时同步在站点中，详情参考<a className="underline" href="https://docs.tangly1024.com/article/start-to-write">《帮助文档》</a>',

  STARTER_FAQ_3_QUESTION: '站点部署失败，更新失败？',
  STARTER_FAQ_3_答案：
    '一般是配置修改错误导致，请检查配置或者重试操作步骤，或者通过Vercel后台的Deployments中找到错误日志，论坛网友求助',

  STARTER_FAQ_4_QUESTION: '文章没有实时同步？',
  STARTER_FAQ_4_答案：
    '先检查Notion_Page_ID是否正确配置，其次由于博客的每个页面都有独立存储，刷新网页后即可解决',

  // 团队负责人
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关 False
  STARTER_TEAM_TITLE: '团队成员',
  STARTER_TEAM_TEXT_1: '我们的开发者团队',
  STARTER_TEAM_TEXT_2：
    'NotionNext由人群技术开源者共同合作完成，感谢每位<a className="underline" href="https://github.com/tangly1024/NotionNext/graphs/contributors">贡献者</a>',

  // 这里不支持CONFIG和环境变量，需要一一修改这里代码。
  STARTER_TEAM_ITEMS：[
    {
      STARTER_TEAM_ITEM_AVATAR：
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa06c61bb-980e-4180-bc18-c15f92c78bb 4%2Ftangly1024.jpg?表=集合&id=8e7acf17-de09-4fa1-abde-b5b80ad4a813&t=8e7acf17-de09-4fa1-abde-b5b80ad4a813&宽度=100&缓存=v2',
      STARTER_TEAM_ITEM_NICKNAME：“Tangly”，
      STARTER_TEAM_ITEM_DESCRIPTION：'开发者'
    }，
    {
      STARTER_TEAM_ITEM_AVATAR：'/images/starter/team/team-01.png'，
      STARTER_TEAM_ITEM_NICKNAME：“梅丽莎·塔彻”，
      STARTER_TEAM_ITEM_DESCRIPTION：“营销专家”
    }，
    {
      STARTER_TEAM_ITEM_AVATAR：'/images/starter/team/team-02.png'，
      STARTER_TEAM_ITEM_NICKNAME：“Stuard Ferrel”，
      STARTER_TEAM_ITEM_DESCRIPTION：“数字营销人员”
    }，
    {
      STARTER_TEAM_ITEM_AVATAR：'/images/starter/team/team-03.png'，
      STARTER_TEAM_ITEM_NICKNAME：“伊娃·哈德森”，
      STARTER_TEAM_ITEM_DESCRIPTION: '创意设计师'
    }
  ]，

  // 发表计划
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE：“我们的产品”，
  STARTER_BLOG_COUNT: 6, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1：“我们的产品”，
  STARTER_BLOG_TEXT_2：
    “徽章、奖牌、钥匙扣、编织带、PVC 产品、硅胶腕带、绣花套、奖杯、双面硬币和装饰品。”，

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE：“祝您有美好的一天！”，
  STARTER_CONTACT_TEXT：“联系支持”，
  STARTER_CONTACT_LOCATION_TITLE: '我们的位置', // 我们的位置
  STARTER_CONTACT_LOCATION_TEXT: '中国，中山',
  STARTER_CONTACT_EMAIL_TITLE: '我们如何帮助您？', //我们如何帮助您？
  STARTER_CONTACT_EMAIL_TEXT: 'inquiry@molacraft.com',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/yfctc7', //基于NoteForm创建，将留言数据存在Notion中
  // 自定义留言表单，以下几个配置暂时荒废
  // STARTER_CONTACT_MSG_TITLE: '向我们留言',
  // STARTER_CONTACT_MSG_NAME: '姓名',
  // STARTER_CONTACT_MSG_EMAIL: '邮箱地址',
  // STARTER_CONTACT_MSG_PHONE: '联系电话',
  // STARTER_CONTACT_MSG_TEXT: '消息内容',
  // STARTER_CONTACT_MSG_SEND: '发送消息',
  // STARTER_CONTACT_MSG_THANKS: '感谢您的留言',

  //合作伙伴的主题
  STARTER_BRANDS_ENABLE: true, // 合作伙伴开关
  STARTER_BRANDS：[
    {
      图片：'/images/starter/brands/graygrids.svg'，
      IMAGE_WHITE：'/images/starter/brands/graygrids-white.svg'，
      网址：'https://graygrids.com/'，
      标题：'graygrids'
    }，
    {
      图片：'/images/starter/brands/lineicons.svg'，
      IMAGE_WHITE：'/images/starter/brands/lineicons-white.svg'，
      网址：'https://lineicons.com/'，
      标题：'lineicons'
    }，
    {
      图片：'/images/starter/brands/uideck.svg'，
      IMAGE_WHITE：'/images/starter/brands/uideck-white.svg'，
      网址：'https://uideck.com/'，
      标题：'uideck'
    }，
    {
      图片：'/images/starter/brands/ayroui.svg'，
      IMAGE_WHITE：'/images/starter/brands/ayroui-white.svg'，
      网址：'https://ayroui.c​​om/'，
      标题：'ayroui'
    }，
    {
      图片：'/images/starter/brands/tailgrids.svg'，
      IMAGE_WHITE：'/images/starter/brands/tailgrids-white.svg'，
      网址：'"https://tailgrids.com/'，
      标题：'tailgrids'
    }
  ]，

  STARTER_FOOTER_SLOGAN: '创造你自己的工艺品', //底部左下角标语

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP：[
    {
      TITLE: '关于我们',
      LINK_GROUP：[
        { TITLE: '官方主页', URL: '/#home' },
        { TITLE: '操作文档', URL: 'https://docs.tangly1024.com/about' },
        {
          TITLE: '帮助支持',
          网址：'https://docs.tangly1024.com/article/how-to-question'
        }，
        {
          TITLE: '合作申请',
          网址：'https://docs.tangly1024.com/article/my-service'
        }
      ]
    }，
    {
      TITLE: '功能特性',
      LINK_GROUP：[
        {
          TITLE: '部署指南',
          网址：'https://docs.tangly1024.com/article/vercel-deploy-notion-next'
        }，
        {
          TITLE: '升级指南',
          网址：'https://docs.tangly1024.com/article/how-to-update-notionnext'
        }，
        { TITLE: '最新版本', URL: 'https://docs.tangly1024.com/article/latest' }
      ]
    }，
    {
      标题：'Notion写作',
      LINK_GROUP：[
        {
          标题：'Notion开始写作'，
          网址：'https://docs.tangly1024.com/article/start-to-write'
        }，
        {
          TITLE: '快捷键提升效率',
          网址：'https://docs.tangly1024.com/article/notion-short-key'
        }，
        {
          TITLE: '中国大陆使用概念',
          网址：'https://docs.tangly1024.com/article/notion-faster'
        }
      ]
    }
  ]，

  STARTER_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/隐私政策',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/使用条款',

  // 404页面的提示语
  STARTER_404_TITLE: '看来我们找不到您要查找的页面。', // 我们似乎找不到您要查找的页面。
  STARTER_404_TEXT：“我们道歉！您试图查找的页面不存在。它可能已被移动或删除。',//抱歉！您要查找的页面不存在。可能已经移动或删除。
  STARTER_404_BACK: '返回主页', // 返回主页

  // 页面底部的行动需求模块
  STARTER_CTA_ENABLE：是，
  STARTER_CTA_TITLE: '你还在等待音乐吗？',
  STARTER_CTA_TITLE_2: '现在开始吧',
  STARTER_CTA_DESCRIPTION：
    '访问NotionNext的操作文档，我们提供了详细的教程，帮助您立即创建搭建站点',
  STARTER_CTA_BUTTON: true, // 是否显示按钮
  STARTER_CTA_按钮网址：
    ''，
  STARTER_CTA_BUTTON_TEXT：'XXX'，

  STARTER_POST_REDIRECT_ENABLE: true, // 默认开启重定向
  STARTER_POST_REDIRECT_URL: 'https://blog.tangly1024.com', // 重定向域名
  STARTER_NEWSLETTER：process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
导出默认配置
