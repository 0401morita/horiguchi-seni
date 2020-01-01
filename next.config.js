const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const fetch = require('isomorphic-unfetch');

module.exports = withCSS(
  withSass({
    target: 'server',
    exportPathMap: async function() {
      let paths = {
        '/': { page: '/' },
        '/service': { page: '/service' },
        '/service/cleaning-lease': { page: '/service/cleaning-lease' },
        '/service/sewing': { page: '/service/sewing' },
        '/service/sales': { page: '/service/sales' },
        '/facility': { page: '/facility' },
        '/entry': { page: '/entry' },
        '/company': { page: '/company' },
        '/contact': { page: '/contact' }
      };
      const res = await fetch(
        'https://horiguchi-seni.sauce.jp/wp-json/wp/v2/posts/?_embed'
      );
      const entries = await res.json();
      if (!entries.length) {
        return paths;
      }

      const slugs = entries.map(entry => entry.slug);
      slugs.forEach(slug => {
        paths[`/entry/${slug}`] = {
          page: '/entry/[slug]',
          query: { slug: slug }
        };
      });

      return paths;
    }
  })
);
