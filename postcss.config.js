const tailwindcss = require("");

module.exports = {
  Plugin: [
    require("autoprefixer"),
    tailwindcss("./tailwind.config.js"),
    process.env.NODE_ENV = "production"
      ? require("@fullhuman/postcss-purgecss")({
          content: ["./src/**/*.js", "./public/index.html"],
          defaultExtractor: (content) =>
            content.match(/[A-Za-z0-9-_:/]+/g) || [],
        })
      : "",
  ],
};
