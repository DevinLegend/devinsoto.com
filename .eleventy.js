const excerptPlugin = require("@11ty/eleventy-plugin-excerpt");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(excerptPlugin);
  eleventyConfig.addPassthroughCopy("resources");
  eleventyConfig.addPassthroughCopy("app.js");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
