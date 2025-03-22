/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: 'images/starter/MOLA/1.svg', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: 'images/starter/MOLA/1.svg', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: 'MOLA CRAFT', // 英雄区文字
  STARTER_HERO_TITLE_2: 'Crafts of different kinds and designs.', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: 'xxx', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL:
    '', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: 'xxx', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: '', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  STARTER_HERO_PREVIEW_IMAGE: '/images/starter/hero/hero-image.webp', // 产品预览图 ，默认读取public目录下图片
  STARTER_HERO_BANNER_IMAGE: '', // hero区下方的全宽图

  // 顶部右侧导航暗流
 // STARTER_NAV_BUTTON_1_TEXT: 'Sign In',
//  STARTER_NAV_BUTTON_1_URL: '/sign-in',

//  STARTER_NAV_BUTTON_2_TEXT: 'Sign Up',
//  STARTER_NAV_BUTTON_2_URL: '/sign-up',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: 'WHAT CAN WE DO', // 特性
  STARTER_FEATURE_TEXT_1: 'WHAT CAN WE DO', // 特性
  STARTER_FEATURE_TEXT_2:
    '10000+ Crafts of different kinds and designs. At Mola Craft, you can get following custom products at direct factory price with one-stop solution reliable service.', // 特性

  STARTER_FEATURE_1_TITLE_1: 'Custom', // 特性1
  STARTER_FEATURE_1_TEXT_1: 'A wide variety of products, customized gifts with different craftsmanship.', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: 'Learn more', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: '', // 特性1

  STARTER_FEATURE_2_TITLE_1: 'Factory Price', // 特性2
  STARTER_FEATURE_2_TEXT_1: 'In the past 7 years, we have invested in 3 different factories to strengthen our production capacity and provide customers with direct factory prices.', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: 'Learn more', // 特性2
  STARTER_FEATURE_2_BUTTON_URL:
    '', // 特性2

  STARTER_FEATURE_3_TITLE_1: 'Quality Guaranteed ', // 特性3
  STARTER_FEATURE_3_TEXT_1: 'We have online QC to check the quality of all products, and it is not allowed to deliver defective products to customers.', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: 'Learn more', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: '', // 特性3

  STARTER_FEATURE_4_TITLE_1: 'One-Stop Logistic Solution', // 特性4
  STARTER_FEATURE_4_TEXT_1: 'We also have a professional sales team to follow your quotations and orders, and provide a one-stop logistics solution when the order is completed. ', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: 'Learn more', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: '', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: 'ABOUT MOLA CRAFT',
  STARTER_ABOUT_TEXT:
    'We have been specializing in custom craft & gift for over 7 years. <br /> We have a production team of more than 200 employees, and a total of about 50 people in the art team and sales team. <br /> So our working language is English and all your quotations and inquiries will be replied on the same working day.<br />In addition, our artist team has more than 5 employees, they work with the sales team in the same office to help our sales to convert your idea or sketch into workable production proof.<br />Our team will keep hard &smart working to create more value to help you win more orders. ',  // <br /> 代表换行
  STARTER_ABOUT_BUTTON_TEXT: 'Learn more',
  STARTER_ABOUT_BUTTON_URL: 'https://demo.molacraft.com/about', // 此处可链接到关于我们的介绍 
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: '95812+',
  STARTER_ABOUT_TIPS_2: 'Finished Orders',
  STARTER_ABOUT_TIPS_3: '875471+ Total Out-put',

  // 首页价格区块
  STARTER_PRICING_ENABLE: false, // 价格区块开关 ture / false
  STARTER_PRICING_TITLE: '价格表',
  STARTER_PRICING_TEXT_1: '很棒的定价计划',
  STARTER_PRICING_TEXT_2:
    '我们制定了灵活的付费模式，您可以按需选择。（NotionNext免费开源，这里仅演示产品订阅付费功能，请勿下单购买！）',

  STARTER_PRICING_1_TITLE: '入门版',
  STARTER_PRICING_1_PRICE: '19.9',
  STARTER_PRICING_1_PRICE_CURRENCY: '$',
  STARTER_PRICING_1_PRICE_PERIOD: '每月',
  STARTER_PRICING_1_HEADER: '功能点',
  STARTER_PRICING_1_FEATURES: '所有的主题,免费更新,帮助手册', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_1_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/c1a38a65-362e-44c5-8065-733fee39eb54',

  STARTER_PRICING_2_TAG: '推荐',
  STARTER_PRICING_2_TITLE: '基础版',
  STARTER_PRICING_2_PRICE: '39.9',
  STARTER_PRICING_2_PRICE_CURRENCY: '$',
  STARTER_PRICING_2_PRICE_PERIOD: '每月',
  STARTER_PRICING_2_HEADER: '功能点',
  STARTER_PRICING_2_FEATURES: '包含入门版,项目源码,内部社群,技术咨询,SEO优化', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_2_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/590ad70a-c3b7-4caf-94ec-9ca27bde06d4',

  STARTER_PRICING_3_TITLE: '高级版',
  STARTER_PRICING_3_PRICE: '59.9',
  STARTER_PRICING_3_PRICE_CURRENCY: '$',
  STARTER_PRICING_3_PRICE_PERIOD: '每月',
  STARTER_PRICING_3_HEADER: '功能点',
  STARTER_PRICING_3_FEATURES: '包含基础版,功能定制开发', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_3_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/df924d66-09dc-42a4-a632-a6b0c5cc4f28',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: false, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: 'User Feedback',
  STARTER_TESTIMONIALS_TEXT_1: 'What Our Users Say',
  STARTER_TESTIMONIALS_TEXT_2:
    '',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'xxx',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '',//头像
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Ryan', //名字
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'xxxx', //简介
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'xxx',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Asenkits',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'xxx',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'xxx',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'DWIND',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'xxx',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'xxx',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'disheng ',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Blog',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'xxx',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fafb21381-f51b-4fd0-9998-800dbeb64dbe%2Favatar.png?table=block&id=195935d2-0d8d-49fc-bd81-1db42ee50840&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'AnJhon',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Anjhon`s Blog ',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: 'xxx',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4f391d7-7d65-4c05-a82c-c6e2c40f06e4%2Fa2a7641a26b367608c6ef28ce9b7e983_(2).png?table=block&id=a386eb0e-4c07-4b18-9ece-bba4e79ce21c&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'LUCEN',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'LUCEN',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    }
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: false, // 常见问题模块开关
  STARTER_FAQ_TITLE: 'FAQ',
  STARTER_FAQ_TEXT_1: 'Frequently Asked Questions',
  STARTER_FAQ_TEXT_2: 'We have compiled a collection of common user inquiries.',

  STARTER_FAQ_1_QUESTION: 'xxxxx？',
  STARTER_FAQ_1_ANSWER:
    'xxxxxx',
    //NotionNext提供了<a href="https://docs.tangly1024.com/about" className="underline">帮助文档</a>，操作<a href="https://www.bilibili.com/video/BV1fM4y1L7Qi/" className="underline">演示视频</a>，以及<a href="https://docs.tangly1024.com/article/chat-community" className="underline">交流社群</a>来协助您完成网站的搭建部署

  STARTER_FAQ_2_QUESTION: 'xxxxx？',
  STARTER_FAQ_2_ANSWER:
    'xxxxxxx',
  //您可以在Notion中之间添加或修改类型为Post的页面，内容将被实时同步在站点中，详情参考<a className="underline" href="https://docs.tangly1024.com/article/start-to-write">《帮助文档》</a>

  STARTER_FAQ_3_QUESTION: 'xxxxx？',
  STARTER_FAQ_3_ANSWER:
    'xxxx',

  STARTER_FAQ_4_QUESTION: 'xxxx？',
  STARTER_FAQ_4_ANSWER:
    'xxxxx',

  // 团队成员区块
  STARTER_TEAM_ENABLE: false, // 团队成员区块开关 False
  STARTER_TEAM_TITLE: '团队成员',
  STARTER_TEAM_TEXT_1: '我们的开发者团队',
  STARTER_TEAM_TEXT_2:
    'NotionNext 由众多开源技术爱好者们共同合作完成，感谢每一位<a className="underline" href="https://github.com/tangly1024/NotionNext/graphs/contributors">贡献者</a>',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa06c61bb-980e-4180-bc18-c15f92c78bb4%2Ftangly1024.jpg?table=collection&id=8e7acf17-de09-4fa1-abde-b5b80ad4a813&t=8e7acf17-de09-4fa1-abde-b5b80ad4a813&width=100&cache=v2',
      STARTER_TEAM_ITEM_NICKNAME: 'Tangly',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Developer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-01.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Melissa Tatcher',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Marketing Expert'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-02.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Stuard Ferrel',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Digital Marketer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-03.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Eva Hudson',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Creative Designer'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: 'Our products',
  STARTER_BLOG_COUNT: 15, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: 'Our products',
  STARTER_BLOG_TEXT_2:
    'Badges, medals, keychains, woven straps, PVC products, silicone wristbands, embroidered covers, trophies, double-sided coins, and decorations.',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: 'Have a good day!',
  STARTER_CONTACT_TEXT: 'Contact support',
  STARTER_CONTACT_LOCATION_TITLE: 'CHINA，ZHONGSHAN',  // 我们的位置
  STARTER_CONTACT_LOCATION_TEXT: 'Our location',
  STARTER_CONTACT_EMAIL_TITLE: 'inquiry@molacraft.com', //我们如何帮助您？
  STARTER_CONTACT_EMAIL_TEXT: 'How can we help you?',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/contact-us-legvjt', // 基于NoteForm创建，将留言数据存在Notion中
  //   自定义留言表单，以下几个配置暂时废弃
  //   STARTER_CONTACT_MSG_TITLE: '向我们留言',
  //   STARTER_CONTACT_MSG_NAME: '姓名',
  //   STARTER_CONTACT_MSG_EMAIL: '邮箱地址',
  //   STARTER_CONTACT_MSG_PHONE: '联系电话',
  //   STARTER_CONTACT_MSG_TEXT: '消息内容',
  //   STARTER_CONTACT_MSG_SEND: '发送消息',
  //   STARTER_CONTACT_MSG_THANKS: '感谢您的留言',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: false, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: 'Create your own craft',  //底部左下角标语

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: 'Follow us',
      LINK_GROUP: [
        { TITLE: 'Instagram', URL: 'https://www.instagram.com/molacraft2020/' },
        { TITLE: 'Facebook ', URL: 'https://facebook.com' },
        {
          TITLE: 'X',
          URL: 'https://x.com/'
        },
        {
          TITLE: 'Mail',
          URL: 'mailto:inquiry@molacraft.com'
        }
      ]
    },
    {
      TITLE: 'xxx',
      LINK_GROUP: [
        {
          TITLE: 'xxx',
          URL: ''
        },
        {
          TITLE: 'xxx',
          URL: ''
        },
        { TITLE: 'xxx', URL: '' }
      ]
    },
    {
      TITLE: 'xxx',
      LINK_GROUP: [
        {
          TITLE: 'xxx',
          URL: ''
        },
        {
          TITLE: 'xxx',
          URL: ''
        },
        {
          TITLE: 'xxx',
          URL: ''
        }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: '111',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: 'Copyright © 2023', //隐私政策
  STARTER_FOOTER_PRIVACY_POLICY_URL: '',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: 'Zhongshan MolaCraft CO,.Ltd', //法律声明
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '',//服务协议
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '',

  // 404页面的提示语
  STARTER_404_TITLE: 'It seems we cannot find the page you‘are looking for.', // 我们似乎找不到您要找的页面。
  STARTER_404_TEXT: 'We apologize! The page you are trying to find does not exist. It may have been moved or deleted.',//抱歉！您要查找的页面不存在。可能已经移动或删除。
  STARTER_404_BACK: 'Return to the homepage', // 回到主页

  // 页面底部的行动呼吁模块
  STARTER_CTA_ENABLE: true,
  STARTER_CTA_TITLE: 'Start your customization',
  STARTER_CTA_TITLE_2: 'A variety of gifts and handicrafts',
  STARTER_CTA_DESCRIPTION:
    'Visit our product library to learn about the latest product information.',
  STARTER_CTA_BUTTON: true, // 是否显示按钮
  STARTER_CTA_BUTTON_URL:
    'mailto:inquiry@molacraft.com',
  STARTER_CTA_BUTTON_TEXT: 'Contact us→',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: '', // 重定向域名 
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
