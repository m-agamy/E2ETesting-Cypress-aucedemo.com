
# E2ETesting-Cypress-aucedemo.com

## How to install CypressIO

```bash
npm install cypress --save-dev
```
or
```bash
yarn add cypress --dev
```

## How to run tests

```bash
npx cypress open
```

### cypress-mochawesome-reporter

1. install cypress-mochawesome-reporter

    ```
    npm i --save-dev cypress-mochawesome-reporter
    ```

    or

    ```
    yarn add -D cypress-mochawesome-reporter
    ```

2. Change cypress reporter & setup hooks

    Edit config file (`cypress.config.js` by default)

    ```js
    const { defineConfig } = require('cypress');

    module.exports = defineConfig({
      reporter: 'cypress-mochawesome-reporter',
      e2e: {
        setupNodeEvents(on, config) {
          require('cypress-mochawesome-reporter/plugin')(on);
        },
      },
    });
    ```



