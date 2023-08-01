module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          allowlist: ["REST_API_KEY", "APPLICATION_ID"],
        },
      ],
    ],
  };
};
