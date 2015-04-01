Package.describe({
  name: "uzumaxy:sass-css3-mixins",
  summary: "Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library.",
  version: "0.0.2",
  git: "https://github.com/uzumaxy/meteor-sass-css3-mixins"
});

Package.onUse(function(api) {
  api.addFiles([
    "uzumaxy:sass-css3-mixins/css3-mixins.scss",
  ], ["client"]);
});
