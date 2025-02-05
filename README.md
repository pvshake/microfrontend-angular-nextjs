# Microfrontend com Angular Host e React Remote

Este é uma aplicação para cadastro de clientes com funcionalidades que
envolvem dados pessoais, dados de pagamento e análise de crédito, onde a análise
de crédito será baseada no score do cliente.

### Tempo de desenvolvimento

[![wakatime](https://wakatime.com/badge/user/6dcab2c7-684b-409a-a0f3-09ac48569e8f/project/2f244eda-55a0-4aa8-8eb9-30852b159df0.svg)](https://wakatime.com/badge/user/6dcab2c7-684b-409a-a0f3-09ac48569e8f/project/2f244eda-55a0-4aa8-8eb9-30852b159df0)

## Stack do Projeto

- **[Angular 17](https://angular.io/)**: Utilizado para criar o microfrontend host, contendo a estrutura base do projeto, como a HomePage, Menu lateral, Header e outros componentes.
- **[React 18](https://react.dev)**: Utilizado para criar o microfrontend remoto, com as páginas específicas requisitadas no case, seguindo uma arquitetura baseada em componentes.
- **[TypeScript (v5+)](https://www.typescriptlang.org/)**: Fornece tipagem estática, melhorando a produtividade e prevenindo erros comuns através da aplicação de tipos.
- **[Vite (v5+)](https://vite.dev/)**: Ferramenta de build e servidor de desenvolvimento rápido, usado para o MFE React, que otimiza a experiência de desenvolvimento com recursos como Hot Module Replacement (HMR).
- **[Tailwind CSS (v3+)](https://tailwindcss.com/)**: Framework CSS utilitário usado para estilizar a aplicação de forma rápida e consistente. Utilizado em ambos os MFEs para manter um padrão de Design System.
- **[Module Federation](https://webpack.js.org/concepts/module-federation/)**: Responsável pela integração dos microfrontends, permitindo o carregamento dinâmico de módulos remotos.
- **[Webpack](https://webpack.js.org/)**: Utilizado como builder do Angular, integrado com Module Federation para carregar os microfrontends remotos via `remoteEntry.js`.
- **[Shadcn/ui](https://ui.shadcn.com/)**: Biblioteca de componentes UI utilizada no React para garantir consistência e agilidade no desenvolvimento de interfaces.

---

## Visão Geral da Arquitetura

- **Design Baseado em Componentes**: Componentes reutilizáveis e modulares dentro do React e no Angular.
- **Web Components**: Criação de web components para integrar as páginas React no Angular, garantindo que funcionem corretamente.
- **Design Responsivo**: Interface consistente e adaptável com **Tailwind CSS**, otimizada para todos os dispositivos.
- **Estratégia de Testes**: Componentes confiáveis testados com **Vitest** para validar funcionalidades comportamentos no React. Testes end-to-end são realizados nativamente com o Angular.
- **Integração com Backend**: A lógica de estado local via localStorage pode ser facilmente substituída por chamadas de API no futuro.
- **Modularidade**: Uso de lazy loading no `app.route.ts` para carregar módulos sob demanda, melhorando a performance.
- **Persistência de Dados**: Uso de `localStorage` para persistência inicial dos dados, com suporte a `mockData.ts`, `Cliente.d.ts` e funções compartilhadas para simular uma API REST.

---

### Instalação e uso

1. Clone o repositório

```bash
git clone https://github.com/pvshake/microfrontend-angular-react.git
```

2. Entre no diretório do projeto

```bash
cd microfrontend-angular-react
```

3. Execute o seguinte comando e aguarde a instalação de todas as dependências já dar start nos dois frameworks em suas respectivas portas

```bash
npm run start-mfes
```

4. Após aguardar a instalação e ver que as duas portas estão rodando, abra no seu navegador a seguinte URL

```bash
https://localhost:4200
```

5. Agora é só usar!

---

### Para testes

1. React: Entre na pasta do mfe react e execute

```bash
npm run test
```

2. Angular: Entre na pasta do mfe Angular e execute

```bash
ng test
```

---

### Tempo de build

1. Angular Host

```bash
8.8 segundos
```

2. React Remote

```bash
4.78 segundos
```

### Exemplo da Aplicação no navegador

![browser](./shared/videos/demo-web.gif)

### Exemplo da Aplicação no mobile

![mobile](./shared/videos/demo-mobile.gif)
