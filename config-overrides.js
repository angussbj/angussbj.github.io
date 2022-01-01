const path = require("path");
module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      ui: path.resolve(__dirname, "src/ui"),
      utilities: path.resolve(__dirname, "src/utilities"),
    },
  };
  return config;
};
