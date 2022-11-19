const Image = require('@11ty/eleventy-img');

const imageShortcode = async (img) => {
  // we'll fill this in shortly
};

const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {

  eleventyConfig.addNunjucksAsyncShortcode('image', imageShortcode);
  
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Passthrough
  eleventyConfig.addPassthroughCopy({ "src/static": "." });
  eleventyConfig.addPassthroughCopy("**/*.jpg");
  eleventyConfig.addPassthroughCopy("**/*.jpeg");
  eleventyConfig.addPassthroughCopy("**/*.png");
  
  // Watch targets
  eleventyConfig.addWatchTarget("./src/site.css");
    
  return {
    templateFormats: ["html", "md", "njk"],
    dir: {
      input: "src",
      output: "docs"
    }
  }
}
