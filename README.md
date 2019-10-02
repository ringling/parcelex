# Parcelex

## Prod deploy

```
MIX_ENV=prod mix compile
npm run deploy --prefix ./assets
mix phx.digest
PORT=4001 MIX_ENV=prod mix phx.server
```

## Test setup
```
cd assets
npm install --save-dev jest @vue/test-utils
npm install --save-dev vue-jest
npm install --save-dev babel-core
```

```
jest": {
    "moduleFileExtensions": [
      "js",
      "json",
      "vue"
    ],
    "transform": {
      "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
      ".*\\.(vue)$": "vue-jest"
    }
  }
```


## Usual stuff

To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.setup`
  * Install Node.js dependencies with `cd assets && npm install`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](https://hexdocs.pm/phoenix/deployment.html).


