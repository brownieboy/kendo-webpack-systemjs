# kendo-webpack-systemjs
Basic boilerplate for using KendoUI Pro with ES6 modules, using Webpack as the module loader and Babel to transile to ES5.

Also intended to include a SystemJS version, but I've been unable to get this working with the 2016 versions of Kendo UI.  See [my bug report](http://www.telerik.com/forums/kendoui-2016-and-systemjs) for more info on this.


###The problem
SystemJS is not finding the dependent Kendo libraries.  It does load libraries that are loaded directly by my code.  For example,  in /src/js/app.js I am loading kendo.router.js, and SystemJS find that just find.  However, kendo.router.js then tries to load kendo.core.js, and for some reason SystemJs is unable to find that.

###Possible Causes
This appears to be a problem introduced with the 2016 versions of Kendo.  This repository uses version 2016.1.226+SP1.  Apparently, Telerik changed some of the AMD definitions in the 2016 versions.  The problem does not happen with the last 2015 version of Kendo, which you can check via a separate repository at https://github.com/brownieboy/kendo-systemjs-2015.



###Environment
The code in this repository uses Node/npm to install its dependencies.  Setup instructions are:

1. Install [Node/npm](https://nodejs.org/en/download/) if you don't have it already.  For Windows, you'll also need a bash shell, which you get if you install [Github for Windows] (https://desktop.github.com/) (make sure you tick the box to install the shell).
1. In a bash window, git clone this repository.
1. cd to the repository folder, then issue `npm install` to download the dependencies.
1. One of those dependencies will be Bower.  You can now use Bower to install Kendo Pro from the official Telerik Bower packages by issuing `bower install` (or ` node_modules/.bin/bower install` if that fails) at your command prompt.  You will be prompted to your Telerik ID and password at this stage, and may have to enter them twice

###Development
To run a development version, issue `npm run start` at your console to initiate the webpack-dev-server.  Then point your browser to http://localhost:8080/src/index.html.



1. Open the file src/index.html in your browser in a local web server.  I use Sublime Server for this.



