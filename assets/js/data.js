/**
 * 大漢酵素 MOMO 品牌旗艦館 - 資料管理中心
 * 集中管理所有圖片連結和超連結
 */

const siteData = {
  // 品牌標誌
  logo: {
    main: './assets/img/logo/LOGO.png',
    fallback: './assets/img/logo/1736495365_LOGO-60x300.jpg.avif',
    white: './assets/img/logo/white-LOGO.png'
  },

  // 導航連結
  navigation: [
    { name: '館長推薦', href: '#' },
    { name: '全館優惠', href: '#all_store_discounts' },
    { name: '主打組合', href: '#main_products' },
    { name: '好評推薦', href: '#highly_recommended' }
  ],

  // Hero 輪播圖
  heroSlides: [
    {
      id: 1,
      desktop: './assets/img/hero/202601-1.jpg',
      mobile: './assets/img/hero/202601-1-sm.jpg',
      link: 'https://www.momoshop.com.tw/category/DgrpCategory.jsp?d_code=1203300109&p_orderType=4&showType=chessboardType',
      alt: '大漢酵素優惠活動 1'
    },
    {
      id: 2,
      desktop: './assets/img/hero/202601-2.jpg',
      mobile: './assets/img/hero/202601-2-sm.jpg',
      link: 'https://www.momoshop.com.tw/category/DgrpCategory.jsp?d_code=1203300109&p_orderType=4&showType=chessboardType',
      alt: '大漢酵素優惠活動 2'
    },
    {
      id: 3,
      desktop: './assets/img/hero/202601-3.jpg',
      mobile: './assets/img/hero/202601-3-sm.jpg',
      link: 'https://www.momoshop.com.tw/category/DgrpCategory.jsp?d_code=1203300109&p_orderType=4&showType=chessboardType',
      alt: '大漢酵素優惠活動 3'
    }
  ],

  // 限時優惠
  limitedTimeOffer: {
    title: '4/19-4/22限定優惠',
    items: [
      {
        id: 1,
        ribbon: '下單送',
        image: 'https://i4.momoshop.com.tw/1775126998/goodsimg/0014/100/410/14100410_R.webp',
        link: 'https://www.momoshop.com.tw/category/DgrpCategory.jsp?d_code=1203300109&p_orderType=4&showType=chessboardType',
        alt: '下單送好禮'
      },
      {
        id: 2,
        ribbon: '滿3000送',
        image: 'https://i4.momoshop.com.tw/1775126998/goodsimg/0014/100/410/14100410_R.webp',
        link: 'https://www.momoshop.com.tw/category/DgrpCategory.jsp?d_code=1203300109&p_orderType=4&showType=chessboardType',
        alt: '滿3000送好禮'
      },
      {
        id: 3,
        ribbon: '滿5999送',
        image: 'https://i4.momoshop.com.tw/1775126998/goodsimg/0014/100/410/14100410_R.webp',
        link: 'https://www.momoshop.com.tw/category/DgrpCategory.jsp?d_code=1203300109&p_orderType=4&showType=chessboardType',
        alt: '滿5999送好禮'
      },
      {
        id: 4,
        ribbon: '滿8000送',
        image: 'https://i4.momoshop.com.tw/1775126998/goodsimg/0014/100/410/14100410_R.webp',
        link: 'https://www.momoshop.com.tw/category/DgrpCategory.jsp?d_code=1203300109&p_orderType=4&showType=chessboardType',
        alt: '滿8000送好禮'
      }
    ]
  },

  // 影片連結
  videos: {
    main: {
      id: 'JKkuTds601g',
      embedUrl: 'https://www.youtube.com/embed/JKkuTds601g',
      title: '大漢酵素品牌介紹'
    },
    additional: [
      {
        id: 'HymboHeAwmg',
        embedUrl: 'https://www.youtube.com/embed/HymboHeAwmg',
        title: '大漢酵素產品介紹 1'
      },
      {
        id: '_UYbVOtmOXk',
        embedUrl: 'https://www.youtube.com/embed/_UYbVOtmOXk',
        title: '大漢酵素產品介紹 2'
      },
      {
        id: 'o2BQfAHzAos',
        embedUrl: 'https://www.youtube.com/embed/o2BQfAHzAos',
        title: '大漢酵素產品介紹 3'
      }
    ]
  },

  // Banner 圖片
  banners: {
    brandIntroduction: './assets/img/banner/BrandIntroduction.jpg',
    grape: './assets/img/banner/grape.jpg',
    fermentationChamber: './assets/img/banner/FermentationChamber.jpg',
    researchAndDevelopment: './assets/img/banner/ResearchAndDevelopment.jpg'
  },

  // 產品區塊
  products: {
    // 主打產品
    mainProducts: {
      id: 'main_products',
      title: '主打組合',
      banner: {
        image: './assets/img/main_products/202603-買一送一夜酵素DX代言人-1920x920.jpg',
        link: 'https://www.momoshop.com.tw/category/DgrpCategory.jsp?d_code=1203300109&p_orderType=4&showType=chessboardType',
        alt: '明日美夜酵素買一送一'
      },
      items: [
        {
          id: 1,
          name: '明日美 1入',
          image: './assets/img/main_products/202604-5月momo品牌旗艦館產品圖-明日美1入.jpg',
          link: 'https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=13251834&Area=search&mdiv=403&oid=2_22&cid=index&kw=ESSENTURE+%E5%A4%A7%E6%BC%A2%E9%85%B5%E7%B4%A0',
          alt: '明日美夜酵素 1入組'
        },
        {
          id: 2,
          name: '明日美 買1送1',
          image: './assets/img/main_products/202604-5月momo品牌旗艦館產品圖-明日美買1送1.jpg',
          link: 'https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=14100410&Area=search&mdiv=403&oid=1_1&cid=index&kw=ESSENTURE+%E5%A4%A7%E6%BC%A2%E9%85%B5%E7%B4%A0',
          alt: '明日美夜酵素 買1送1'
        },
        {
          id: 3,
          name: '明日美 5入',
          image: './assets/img/main_products/202604-5月momo品牌旗艦館產品圖-明日美5入.jpg',
          link: 'https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=13333169&Area=search&mdiv=403&oid=1_3&cid=index&kw=ESSENTURE+%E5%A4%A7%E6%BC%A2%E9%85%B5%E7%B4%A0',
          alt: '明日美夜酵素 5入組'
        },
        {
          id: 4,
          name: '明日美 10入',
          image: './assets/img/main_products/202604-5月momo品牌旗艦館產品圖-明日美10入.jpg',
          link: 'https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=14770722&Area=search&mdiv=403&oid=1_28&cid=index&kw=ESSENTURE+%E5%A4%A7%E6%BC%A2%E9%85%B5%E7%B4%A0',
          alt: '明日美夜酵素 10入組'
        }
      ]
    },

    // 基礎保健
    basicHealth: {
      id: 'basic_health',
      title: '基礎保健',
      banner: {
        image: './assets/img/basic_health/202604-MOMO全聯品牌旗艦館產品分類BN-1920x1080.jpg',
        link: 'https://www.momoshop.com.tw/category/DgrpCategory.jsp?d_code=1203300109&p_orderType=4&showType=chessboardType',
        alt: '基礎保健系列'
      },
      items: [
        {
          id: 1,
          name: 'V52 3入',
          image: './assets/img/basic_health/202604-5月momo品牌旗艦館產品圖-v52-3入.jpg',
          link: 'momoshop.com.tw/search/ESSENTURE%20大漢酵素?brand=ESSENTURE+大漢酵素&brandNo=20160808160018121&isBrandPage=1&serviceCode=MT04&viewport=desktop&_isFuzzy=0&searchType=6&curPage=1',
          alt: 'V52 蔬果植物醱酵液 3入組'
        },
        {
          id: 2,
          name: '綜合蔬果酵素 3入',
          image: './assets/img/basic_health/202604-5月momo品牌旗艦館產品圖-綜合3入.jpg',
          link: 'https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=10925282&Area=search&mdiv=403&oid=1_11&cid=index&kw=ESSENTURE+%E5%A4%A7%E6%BC%A2%E9%85%B5%E7%B4%A0',
          alt: '綜合蔬果酵素 3入組'
        },
        {
          id: 3,
          name: '鳳梨酵素 3入',
          image: './assets/img/basic_health/202604-5月momo品牌旗艦館產品圖-鳳梨3入.jpg',
          link: 'https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=13039593&Area=search&mdiv=403&oid=2_17&cid=index&kw=ESSENTURE+%E5%A4%A7%E6%BC%A2%E9%85%B5%E7%B4%A0',
          alt: '鳳梨酵素 3入組'
        },
        {
          id: 4,
          name: '青梅酵素 3入',
          image: './assets/img/basic_health/202604-5月momo品牌旗艦館產品圖-青梅3入.jpg',
          link: 'https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=10925275&Area=search&mdiv=403&oid=1_25&cid=index&kw=ESSENTURE+%E5%A4%A7%E6%BC%A2%E9%85%B5%E7%B4%A0',
          alt: '青梅酵素 3入組'
        }
      ]
    },

    // 女神秘密
    littleSecret: {
      id: 'little_secret',
      title: '女神秘密',
      banner: {
        image: './assets/img/little_secret/202604-MOMO全聯品牌旗艦館產品分類女神BN-1920x1080.jpg',
        link: 'https://www.momoshop.com.tw/category/DgrpCategory.jsp?d_code=1203300109&p_orderType=4&showType=chessboardType',
        alt: '女神秘密系列'
      },
      items: [
        {
          id: 1,
          name: '暢速樂 5入',
          image: './assets/img/little_secret/202604-5月momo品牌旗艦館產品圖-暢速樂5入.jpg',
          link: 'https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=14183556&Area=search&mdiv=403&oid=1_8&cid=index&kw=ESSENTURE+%E5%A4%A7%E6%BC%A2%E9%85%B5%E7%B4%A0',
          alt: '暢速樂 5入組'
        },
        {
          id: 2,
          name: '助大漢 3入',
          image: './assets/img/little_secret/202604-5月momo品牌旗艦館產品圖-助大漢3入.jpg',
          link: 'https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=14227981&Area=search&mdiv=403&oid=1_19&cid=index&kw=ESSENTURE+%E5%A4%A7%E6%BC%A2%E9%85%B5%E7%B4%A0',
          alt: '助大漢 3入組'
        },
        {
          id: 3,
          name: '燉木耳 2入',
          image: './assets/img/little_secret/202604-5月momo品牌旗艦館產品圖-燉木耳2入.jpg',
          link: 'https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=9484582&Area=search&mdiv=403&oid=1_4&cid=index&kw=ESSENTURE+%E5%A4%A7%E6%BC%A2%E9%85%B5%E7%B4%A0',
          alt: '燉木耳 2入組'
        },
        {
          id: 4,
          name: 'NMN酵素之王Plus 3入',
          image: './assets/img/little_secret/202604-5月momo品牌旗艦館產品圖-nmn酵素之王plus3入.jpg',
          link: 'https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=14593415&Area=search&mdiv=403&oid=2_29&cid=index&kw=ESSENTURE+%E5%A4%A7%E6%BC%A2%E9%85%B5%E7%B4%A0',
          alt: 'NMN酵素之王Plus 3入組'
        }
      ]
    },

    // 送禮首選
    firstChoice: {
      id: 'first_choice',
      title: '送禮首選',
      banner: {
        image: './assets/img/first_choice/202604-MOMO全聯品牌旗艦館產品分類禮盒BN-1920x1080.jpg',
        link: 'https://www.momoshop.com.tw/category/DgrpCategory.jsp?d_code=1203300109&p_orderType=4&showType=chessboardType',
        alt: '送禮首選系列'
      },
      items: [
        {
          id: 1,
          name: '七福V52 3入',
          image: './assets/img/first_choice/202604-5月momo品牌旗艦館產品圖-七福v52-3入.jpg',
          link: 'https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=14281944&Area=search&mdiv=403&oid=4_2&cid=index&kw=ESSENTURE+%E5%A4%A7%E6%BC%A2%E9%85%B5%E7%B4%A0',
          alt: '七福V52禮盒 3入組'
        },
        {
          id: 2,
          name: '七福綜合 3入',
          image: './assets/img/first_choice/202604-5月momo品牌旗艦館產品圖-七福綜合3入.jpg',
          link: 'https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=13156748&Area=search&mdiv=403&oid=3_18&cid=index&kw=ESSENTURE+%E5%A4%A7%E6%BC%A2%E9%85%B5%E7%B4%A0',
          alt: '七福綜合禮盒 3入組'
        },
        {
          id: 3,
          name: '七福雙酵 3入',
          image: './assets/img/first_choice/202604-5月momo品牌旗艦館產品圖-七福雙酵3入.jpg',
          link: 'https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=13156745&Area=search&mdiv=403&oid=3_17&cid=index&kw=ESSENTURE+%E5%A4%A7%E6%BC%A2%E9%85%B5%E7%B4%A0',
          alt: '七福雙酵禮盒 3入組'
        },
        {
          id: 4,
          name: '御藏千養 1入',
          image: './assets/img/first_choice/202604-5月momo品牌旗艦館產品圖-御藏千養1入.jpg',
          link: 'https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=13173780&Area=search&mdiv=403&oid=2_6&cid=index&kw=ESSENTURE+%E5%A4%A7%E6%BC%A2%E9%85%B5%E7%B4%A0',
          alt: '御藏千養禮盒 1入'
        }
      ]
    }
  },

  // 品牌內容
  brandContent: {
    story1: {
      title: '來自土地，最深刻的幸福連結',
      description: '「來自大地的營養，最真實。」創辦人始終堅持，精選天然蔬果，才能釀造最好的植物精華。每一滴營養，皆來自大地之母的恩惠，收納台灣的高山、平原、沿海以及內地，四方濃縮寶島的驕傲與生命力，我們與您細細品嘗這份美好。'
    },
    story2: {
      title: '綠色工廠，與自然同在',
      description: '「來自大地的營養，最真實。」創辦人始終堅持，精選天然蔬果，才能身為世界最大自然素材供應商，大漢酵素以身作則，打造「綠循環能源」(Green Cycle)，多年來精進古法釀製、科學管控，將蔬果與獨家工法深度結合。優質蔬果醱酵後，成為營養滿點的天然肥料，我們將肥料回饋農民，並傳授微生物知識與技術，讓大地喘息與再生，形成良善循環；土壤生生不息、蔬果日益茁壯、營養濃縮精萃、您我健康長遠。\n我們俸上自然之作給您，同時保護著孕育我們的土地。',
      ctaText: '了解更多',
      ctaLink: 'https://www.momoshop.com.tw/category/DgrpCategory.jsp?d_code=1203300109&p_orderType=4&showType=chessboardType'
    }
  },

  // 通用連結
  commonLinks: {
    mainStore: 'https://www.momoshop.com.tw/category/DgrpCategory.jsp?d_code=1203300109&p_orderType=4&showType=chessboardType',
    brandSearch: 'https://www.momoshop.com.tw/search/ESSENTURE%20大漢酵素?brand=ESSENTURE+大漢酵素&brandNo=20160808160018121&isBrandPage=1&serviceCode=MT04&viewport=desktop&_isFuzzy=0&searchType=6&curPage=1'
  }
};

// 如果在瀏覽器環境，將資料掛載到 window 物件
if (typeof window !== 'undefined') {
  window.siteData = siteData;
}

// 如果在 Node.js 環境，匯出模組
if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteData;
}
