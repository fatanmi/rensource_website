module.exports = function (api) {
  api.cache(true);

  const presets = [ ["@babel/preset-env", {
                          targets: [
                              "last 1 version",
                              "> 1%",
                              "IE 11"
                          ],
                          useBuiltIns: "entry",
                          corejs: 3.2
                      }], ["@babel/preset-react"]];
  const plugins = [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties",
    ["@babel/plugin-proposal-object-rest-spread", { "loose": true, "useBuiltIns": true }]
  ];


  return {
    presets,
    plugins
  };
};
