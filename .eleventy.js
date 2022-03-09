const Image = require('@11ty/eleventy-img');

const imageShortcode = async (img) => {
  // we'll fill this in shortly
};

module.exports = function(eleventyConfig) {

  eleventyConfig.addNunjucksAsyncShortcode('image', imageShortcode);
    
  // Passthrough
  eleventyConfig.addPassthroughCopy({ "src/static": "." });
  
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
