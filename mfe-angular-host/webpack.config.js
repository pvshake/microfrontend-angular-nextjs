const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = {
  plugins: [
    withModuleFederationPlugin({
      name: "mfe-angular-host",
      remotes: {
        "mfe-nextjs-react":
          "mfe-nextjs-react@http://localhost:3001/_next/static/chunks/remoteEntry.js",
      },
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
