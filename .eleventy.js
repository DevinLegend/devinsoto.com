module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("resources");
  eleventyConfig.addPassthroughCopy("app.js");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
