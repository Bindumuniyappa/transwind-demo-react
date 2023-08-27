// webpack.config.js

module.exports = {
    // ... other config options ...
    resolve: {
      fallback: {
        "url": require.resolve("url/"), // Point to the resolved 'url' module
      },
    },
  };
  