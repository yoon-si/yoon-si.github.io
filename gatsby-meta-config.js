module.exports = {
  title: `yoonsi`,
  description: `yoonsi blog`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://www.yoonsi.co.kr`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `yoonsi`,
    bio: {
      role: ``,
      description: ['', '', ''],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: ``, // `https://github.com/yoon-si`,
      linkedIn: ``, // ``,
      email: ``, // `yoonsi.studio@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== ๐ซ Don't erase this sample (์ฌ๊ธฐ ์ง์ฐ์ง ๋ง์ธ์!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2021.02 ~',
        activity: '๊ฐ์ธ ๋ธ๋ก๊ทธ ๊ฐ๋ฐ ๋ฐ ์ด์',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          demo: 'https://www.zoomkoding.com',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== ๐ซ Don't erase this sample (์ฌ๊ธฐ ์ง์ฐ์ง ๋ง์ธ์!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '๊ฐ๋ฐ ๋ธ๋ก๊ทธ ํ๋ง ๊ฐ๋ฐ',
        description:
          '๊ฐ๋ฐ ๋ธ๋ก๊ทธ๋ฅผ ์ด์ํ๋ ๊ธฐ๊ฐ์ด ์กฐ๊ธ์ฉ ๋์ด๋๊ณ? ์?์? ๋ง์ ์๊ฐ๊ณผ ๊ฒฝํ์ด ๋ธ๋ก๊ทธ์ ์์๊ฐ๋ฉด์ ์? ์ด์ผ๊ธฐ๋ฅผ ๋ด๊ณ? ์๋ ๋ธ๋ก๊ทธ๋ฅผ ์ง์? ๋ง๋ค์ด๋ณด๊ณ? ์ถ๊ฒ ๋์์ต๋๋ค. ๊ทธ๋์ ์ฌ๋ฌ ๊ฐ๋ฐ ๋ธ๋ก๊ทธ๋ฅผ ๋ณด๋ฉด์ ์ข์๋ ๋ถ๋ถ๊ณผ ๋ถํธํ๋ ๋ถ๋ถ๋ค์ ๋ฐํ์ผ๋ก ๋?ํผ๋ฐ์ค๋ฅผ ์ฐธ๊ณ?ํ์ฌ ์ง์? ๋ธ๋ก๊ทธ ํ๋ง๋ฅผ ๋ง๋ค๊ฒ ๋์์ต๋๋ค.',
        techStack: ['gatsby', 'react'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          demo: 'https://www.zoomkoding.com',
        },
      },
    ],
  },
};
