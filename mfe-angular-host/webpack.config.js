const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = {
  plugins: [
    withModuleFederationPlugin({
      name: "mfeAngularHost",
      remotes: {
        mfeViteReact:
          "mfeViteReact@http://localhost:5173/assets/remoteEntry.js",
      },
      remoteType: "module",
      shared: {
        ...shareAll({
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        }),
      },
    }),
  ],
};
