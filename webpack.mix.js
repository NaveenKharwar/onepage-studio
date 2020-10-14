const mix = require("laravel-mix");

mix
  .js("src/js/script.js", "dist/js")
  .sass("src/scss/style.scss", "dist/css")
  .options({
    processCssUrls: false,
  })
  .browserSync({
    proxy: false,
    port: "5000",
    files: ["dist/css/style.css", "dist/js/script.js", "index.html"],
    server: { baseDir: "./" },
  })
  .copy("src/img", "dist/img")
  .copy("node_modules/slick-carousel/slick", "dist/slick")
  .copy("node_modules/jquery/dist", "dist/js/jquery")
  .copy("node_modules/countup.js/dist/countUp.min.js", "dist/js/")
  .copy("node_modules/@popperjs/core/dist/umd/popper.min.js", "dist/js/")
  .copy("node_modules/bootstrap/dist/js/bootstrap.min.js", "dist/js/bootstrap")
  .setPublicPath("dist");
