module.exports = function(eleventyConfig) {
    
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
