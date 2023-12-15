import {getPageData} from './metaData'

export type LearnMoreDataListType = {
  [key: string]: LearnMoreDataType;
}

export type LearnMoreDataType = {
  title_html: string;
  image: {
    src: string;
    alt: string;
  };
  text: string;
  link: {
    href: string;
  };

}

export const LearnMoreDataList: LearnMoreDataListType = {
  'home': {
    title_html: `ダイセルのセルロース`,
    image: {
      src: '/cellulose/images/learn_more_pic_home.jpg',
      alt: 'ダイセルのセルロース'
    },
    text: 'ダイセルが100年かけて磨き上げてきた、栽培できる素材セルロース',
    link: {
      href: getPageData('home').path,
    }
  },
  'products': {
    title_html: `<span>ダイセルのセルロース</span>製品`,
    image: {
      src: '/cellulose/images/learn_more_pic_products.jpg',
      alt: 'ダイセルのセルロース 製品'
    },
    text: '緻密に特性をデザインすることで様々な製品に採用され社会に役立っている',
    link: {
      href: getPageData('products').path,
    }
  },
  'story': {
    title_html: `<span>ダイセルのセルロース</span>歴史と未来`,
    image: {
      src: '/cellulose/images/learn_more_pic_story.jpg',
      alt: 'ダイセルのセルロース 歴史と未来'
    },
    text: '100年以上、研究・開発を進めてきた、ダイセルのセルロースの歴史とこれからの未来',
    link: {
      href: getPageData('story').path,
    }
  }
}