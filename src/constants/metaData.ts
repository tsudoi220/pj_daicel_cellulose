export type PAGE_TYPE = 'home' | 'about' | 'products'

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
      title: 'ダイセルのセルロース | 株式会社ダイセル',
      description: 'ダイセルのセルロース',
      keywords: '',
      path: '/cellulose/',
      noindex: false,
      shareType: 'default',
      status: '作業中',
    },
    {
      id: 'about',
      title: 'セルロースとは | 株式会社ダイセル',
      description: 'セルロースとは',
      keywords: '',
      path: '/cellulose/about/',
      noindex: false,
      shareType: 'default',
      status: '作業中',
    },
    {
      id: 'products',
      title: 'ダイセルのセルロース製品一覧 | 株式会社ダイセル',
      description: 'ダイセルのセルロース製品一覧',
      keywords: '',
      path: '/cellulose/products/',
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
