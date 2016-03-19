# kendo-webpack-systemjs
Basic boilerplate for using KendoUI Pro with ES6 modules, using Webpack as the module loader and Babel to transpile to ES5.

In this way, only the parts of Kendo that you're actually using will be included in your final code, resulting in a huge file size reduction in your final code.  (Yes, you can always create a custom version of Kendo by hand, but do you really want to keep having to so that every time you add a new Kendo feature?  That's assuming that you even remember to do it, of course!)

Note: I also intended to include a SystemJS version, but I've been unable to get this working with the 2016 versions of Kendo UI.  See [my bug report](http://www.telerik.com/forums/kendoui-2016-and-systemjs) for more info on this.


##Environment
The code in this repository uses Node/npm to install its dependencies.  Setup instructions are:

1. Install [Node/npm](https://nodejs.org/en/download/) if you don't have it already.  For Windows, you'll also need a bash shell, which you get if you install [Github for Windows] (https://desktop.github.com/) (make sure you tick the box to install the shell).
1. In a bash window, git clone this repository.
1. cd to the repository folder, then issue `npm install` to download the dependencies.
1. One of those dependencies will be Bower.  You can now use Bower to install Kendo Pro from the official Telerik Bower packages by issuing `bower install` (or ` node_modules/.bin/bower install` if that fails) at your command prompt.  You will be prompted to your Telerik ID and password at this stage, and may have to enter them twice


##Development
To run a development version, issue `npm run start` at your console to initiate the webpack-dev-server.  Then point your browser to http://localhost:8080/src/index.html.


##Build
To build a standalone(ish) version, issue `npm run start` at your console.  This will build everything you need to the /build folder.  All HTML, CSS and JS files will be copied into here.  The JS will be minified, and the correct references will be inserted for the `<script>` tags.  Only jQuery is still standalone.

You'll get to two JS files from this build process:

1. index.js, which will include your code
1. vendor.js, which will include only the parts of KendoUI Pro that you're using.  This is just over 800Kb in size, as opposed to 2.7Meg for the kendo.all.min.js file.  (That should go down to 300Kb vs 1 Meg when gzipped by your web server).





