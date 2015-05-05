
# <a href="https://github.com/eskypl/glide"><img src="https://raw.github.com/eskypl/glide/master/assets/glide-logo.png" alt="Glide" width="84"></a> ConsoleAdapter

JavaScript stub for a native console object.
Checks if there is a native window.console or console object and if not, assigns an object with empty functions to it.
The module returns whatever is set to window.console (native object or stub).
Useful to silence possible errors that might happen on different environments (where global window.console object is not available).

## Instalation

`npm install glide-console-adapter --save`

## Configuration

Minimal configuration for RequireJS is needed. RequireJS `paths` config variable
has to include property `console-adapter` with given path to script.

### Development and Build

Following code should be used in development and build.

```js
require.config({
  paths: {
    'console-adapter': 'node_modules/glide-console-adapter/adapter'
  }
});
```

## Usage

```js
define([
  'console-adapter'
], function (console) {
	console.log('abc');
});
```

```js
define([
  'console-adapter'
], function () {
	window.console.log('abc');
});
```