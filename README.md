# Webpack Demo

This sample repository demonstrates the pure basics of Webpack.

The webpack in demonstration is from Webpack 2

From the https://webpack.js.org/get-started/

#### Installing Webpack locally

##### Pre-requisites

Have `npm` installed

then run on the CLI command line:

```
npm install --save-dev webpack
```

or to install globally (not advised)

```
npm install webpack -g
```

#### Development
In your application js file make sure you import your required dependencies. In this example
we used lodash dependency. Check code for sample.


#### Manually bundling

Run the following CLI command:

```
node_modules/.bin/webpack app/index.js dist/bundle.js
```

if Webpack installed globally then just do:

```
webpack app/index.js dist/bundle.js
```

#### Using Webpack with a config

Providing you have the webpack.config.js config file

```
webpack --config webpack.config.js
```


#### Using Webpack with npm

It is possible to bundle with npm by just doing:

```
npm run build
```

providing you have the following in your `package.json` file:

```
{
  ...
  "scripts": {
    "build": "webpack"
  }
  ...
}
```
