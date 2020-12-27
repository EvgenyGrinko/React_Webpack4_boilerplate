
# Dependencies

1. "react" - a JS library for creating UI. It contains only the functionality necessary to define React components. It is typically used together with React renderers.

2. "react-dom" - a React renderer for the web environment. It servers as an entry point to the DOM and server renderers for React.


# DevDependencies

1. "@babel/core" - a Babel compiler core.

2. "@babel/preset-env" - a Babel preset for each environment. It doesn't only compiles ES6 and later versions into ES5, but it also looks, what browser is being used and compiles what is need to be compiled for that browser.

3. "@babel/preset-react" - a Babel preset for all React plugins.

4. "babel-loader" - this package allows transpiling JS files using Babel and webpack (e.g. to transpile JSX into JS)

5. "html-webpack-plugin" - a webpack plugin that simplifies creation of HTML files to serve your bundles. It'll generate our build.html file.

6. "webpack" - a module bundler. It bundles JS files for usage in a browser. It is also capable transforming, bundling, or packaging about any resource or asset together.

7. "webpack-cli" - this module provides a set of tools to improve the setup of custom webpack configuration (e.g. "init" - to initialize a new webpack.config.js).

8. "webpack-dev-server" - a development server that provides live reloading. 


# Terms

1. Entry point

This is a starting point for webpack from which all the dependencies of a frontend project are collected. These dependencies form a dependency graph.

By default it's "src/index.js" and configurable. Webpack can have multiple entry points.

2. Output

This is where the resulting JavaScript and static files are collected during the build process.

Since webpack 4 the default folder is "dist/" and configurable.

The resulting JavaScript files are part of the so called bundle.

3. Loaders 

These are third-party extensions that help webpack deal with various file extensions. 

The goal of a loader is to transform files (other than JavaScript) in modules. Once the file becomes a module, webpack can use it as a dependency in your project.

4. Plugins

These are third-party extensions that can alter how webpack works. For example there are plugins for extracting HTML, CSS, or for setting up environment variables.

5. Mode

Webpack has two modes of operations: development and production. The main difference between them is that production mode automatically applies minification and other optimizations to your JavaScript code.

6. Code splitting

Code splitting, or lazy loading is an optimization technique for avoiding larger bundles.

A piece of code that's splitted becomes a chunk.