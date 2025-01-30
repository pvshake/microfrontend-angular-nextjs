const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = {
  plugins: [
    withModuleFederationPlugin({
      name: "mfe-angular-host", // Nome do host (Angular)
      remotes: {
        // Nome do remoto e sua URL
        "mfe-nextjs-react":
          "mfe-nextjs-react@http://localhost:3001/_next/static/chunks/remoteEntry.js",
      },
      shared: {
        ...shareAll({
          singleton: true, // Garante uma única instância dos pacotes
          strictVersion: true, // Verifica compatibilidade estrita de versão
          requiredVersion: "auto", // Usa a versão instalada no host automaticamente
        }),
      },
    }),
  ],
};
