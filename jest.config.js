const config = {
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest",
    "^.+\\.am$": "markdown-to-jsx",
  },
};

module.exports = config;
