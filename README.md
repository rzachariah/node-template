# node-template

Template for typescript node development with eslint+airbnb+prettier.

## What is this?

This is a boilerplate nodejs typescript project that uses eslint for linting and prettier formatting. The eslint setup uses airbnb-base config.

## Steps to reproduce

Create node project.

```
npm init -y
```

Add source.

```
mkdir src
touch src/index.ts
```

Write some code.

Install typescript and Node ambient types.

```
npm install typescript @types/node --save-dev
```

Create typescript config

```
npx tsc --init
```

Install eslint

```
npm i --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

Create eslint config.

```
npx eslint --init
```

Answer prompts.

```
Need to install the following packages:
  @eslint/create-config
Ok to proceed? (y)
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JSON
The config that you've selected requires the following dependencies:

@typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · npm
```

Install airbnb-base config.

```
npx install-peerdeps --dev eslint-config-airbnb-base
```

Add `airbnb-base` to `.eslintrc`.

```
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-base"
  ],
```

Install prettier.

```
npm i eslint-config-prettier eslint-plugin-prettier prettier -D
```

Add prettier to .eslintrc

```
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-base",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint", "prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

Disable/adjust select rules.

```
    "no-return-await": "off",
    "no-plusplus": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }]
```

Add settings block.

```
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx", ".d.ts"]
      }
    }
  },
```

Add VSCode integration

```
{
  "editor.tabSize": 2,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "typescript"]
}
```

Add npm scripts (require additional package: rimraf)

```
    "build": "npm run lint:fix && rimraf ./build && tsc",
    "start": "npm run build && node build",
    "lint": "eslint src",
    "lint:fix": "eslint src --fix",
```

Lint/format, build, and run the project:

```
npm start
```

## Notes

For react development, swap in package `eslint-config-airbnb` and add `airbnb` to extends in place of `airbnb-base`.
