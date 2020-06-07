const path = require("path");
require("@babel/polyfill");
module.exports = {
  configureWebpack: {
    entry: {
      main: ["@babel/polyfill", path.resolve(__dirname, "./src/main.js")]
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        Assets: path.resolve(__dirname, "src/assets"),
        Helper: path.resolve(__dirname, "src/helper"),
        Services: path.resolve(__dirname, "src/services"),
        Component: path.resolve(__dirname, "src/components"),
        Store: path.resolve(__dirname, "src/store"),
        View: path.resolve(__dirname, "src/views"),
      },
      extensions: [".vue", ".js", ".json", ".scss"],
      mainFiles: ["index", "Index"]
    }
  }
};
