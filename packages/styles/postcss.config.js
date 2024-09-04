module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),

    require('postcss-prefixer')({ prefix: 'yc-' }),
  ],
};
