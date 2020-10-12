const mix = require("laravel-mix");

mix
  .sass("src/scss/style.scss", "dist/css")
  .browserSync({
      proxy: false,
      port: '5000',
      files: ["dist/css/style.css", "index.html"],
      server: {baseDir: './'}
  })
  .setPublicPath("dist");
