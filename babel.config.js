module.exports = function (api) {
  api.cache(true);
  var path = require('path');
  return {
    presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
      require.resolve("expo-router/babel"),
      [
        "module-resolver",
        {
          root: ["."],
          resolvePath(sourcePath, currentFile) {
            if (
              sourcePath === "react-native" &&
              !(
                (
                  currentFile.includes("node_modules/react-native/") || // macos/linux paths
                  currentFile.includes("node_modules\\react-native\\")
                ) // windows path
              ) &&
              !(
                currentFile.includes("resolver/react-native/") ||
                currentFile.includes("resolver\\react-native\\")
              )
            ) {
              return path.resolve(__dirname, "resolver/react-native");
            }
            return undefined;
          },
        },
      ]
    ],
  };
};