export type PAGE_TYPE = 'home' | 'story' | 'products'

type pageDataType = {
  id: string
  title: string
  description: string
  keywords: string
  path: string
  noindex: boolean
  shareType: string
  status?: string
  isPageList?: boolean
}

type metaDataType = {
  base: {
    domain: string
    favicon: string
    ogp: string
    site_name: string
    locale: string
    google_site_verification: string
    android_touch_icon: string
    apple_touch_icon: string
  }
  pages: pageDataType[]
  external_links: {
    daicel: string
    inquiry: string


  }
}

export const metaData: metaDataType = {
  base: {
    domain: 'https://www.daicel.com',
    favicon: '/common_img/symbol/favicon.ico',
    ogp: '/cellulose/images/ogp.png',
    site_name: "ナノダイヤソリューション | 株式会社ダイセル",
    locale: "ja_JP",
    google_site_verification: "X6qxvrd-njryOQSyvNZVPsGIRMRjK0-w8SzUfIbVP_o",
    android_touch_icon: "/cellulose/images/android-touch-icon.png",
    apple_touch_icon: "/cellulose/images/apple-touch-icon.png"
  },
  pages: [
    {
      id: 'pagelist',
      title: 'テンプレート 画面一覧',
      description: '',
      keywords: '',
      path: '',
      noindex: true,
      shareType: 'default',
      isPageList: true,
    },
    {
      id: 'home',
      title: 'ダイセルのセルロース｜株式会社ダイセル',
      description: 'ダイセルが100年かけて磨き上げてきた、栽培できる素材セルロースをご紹介します。',
      keywords: '',
      path: '/cellulose/',
      noindex: false,
      shareType: 'default',
      status: '作業中',
    },
    {
      id: 'products',
      title: 'ダイセルのセルロース製品｜株式会社ダイセル',
      description: 'ダイセルのセルロースは、多様な目的に合わせ緻密に特性をデザインすることで様々な製品に採用され社会に役立っています。',
      keywords: '',
      path: '/cellulose/products/',
      noindex: false,
      shareType: 'default',
      status: '作業中',
    },
    {
      id: 'story',
      title: 'ダイセルのセルロースの歴史と未来｜株式会社ダイセル',
      description: 'ダイセルは創業より100 年以上に渡り、セルロースの研究・開発を進め、新しい価値を生み出し続け、世の中に提供しています。',
      keywords: '',
      path: '/cellulose/story/',
      noindex: false,
      shareType: 'default',
      status: '作業中',
    },
  ],
  external_links: {
    daicel: 'https://www.daicel.com/',
    inquiry: 'https://www.daicel.com/inquiry/input?inquiry_type=14'
  }
}

export const getPageData = (id: string): pageDataType => {
  const pageData = metaData.pages.find((page) => page.id === id);
  if (!pageData) {
    throw new Error("ページデータが見つかりません");
  }
  return pageData;
}