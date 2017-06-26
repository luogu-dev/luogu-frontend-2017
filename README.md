# Luogu Frontend

## Developer Notice

I manually turned off Standard linter in `.vscode/settings.json`, because I use ESLint with Standard. A `npm i` would help you install them and configure in VSCode.

## Setup

Add `127.0.0.1  f.luogu.org` to your `hosts` file, and access your local development instance. This is required to share cookies with `luogu.org`.

## Some HTML & Vue style guide

1. 2-space indent.
2. Use self-closing tags when using **components** with no inner content. Add a space before slash.
  eg. Use `<user-dropdown />` instead of `<user-dropdown></user-dropdown>`, but still use `<span></span>`.
3. Always use double quotes in HTML, and use single quotes in `v-bind` declarations for string literals.
  eg. Use `<span class="uk-margin-small-right" :uk-icon="'icon: ' + icon"></span>`.
4. String concating with `+` is only allowed in `v-*` declarations. Don't forget spaces before and after `+`.
5. Don't use complex expressions in `v-*` declarations.
6. Always include at least one `-` in the name of a Vue component.
  eg. `<user-dropdown />`
7. Always use PascalCase in imported component names.
  eg. `import UserDropdown from './user-dropdown'`

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reloading at localhost:3000
$ npm run dev

# build for production and launch the server
$ npm run build
$ npm start

# generate a static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://nuxtjs.org).
