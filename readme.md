# kendo-webpack-systemjs
Basic boilerplate for using KendoUI Pro with ES6 modules, using Webpack as the module loader and Babel to transpile to ES5.

In this way, only the parts of Kendo that you're actually using will be included in your final code, resulting in a huge file size reduction in your final code.  (Yes, you can always create a custom version of Kendo by hand, but do you really want to keep having to so that every time you add a new Kendo feature?  That's assuming that you even remember to do it, of course!)




##Environment
The code in this repository uses Node/npm to install its dependencies.  Setup instructions are:

1. Install [Node/npm](https://nodejs.org/en/download/) if you don't have it already.  For Windows, you'll also need a bash shell, which you get if you install [Github for Windows] (https://desktop.github.com/) (make sure you tick the box to install the shell).
1. In a bash window, git clone this repository.
1. cd to the repository folder, then issue `npm install` to download the dependencies.
1. One of those dependencies will be Bower.  You can now use Bower to install Kendo Pro from the official Telerik Bower packages by issuing `bower install` (or ` node_modules/.bin/bower install` if that fails) at your command prompt.  You will be prompted to your Telerik ID and password at this stage, and may have to enter them twice


##Development
To run the Webpack development version, issue `npm run start` at your console to initiate the webpack-dev-server.  Then point your browser to http://localhost:8080/src/index.html.


##Build
To build a standalone(ish) version using Webpack, issue `npm run start` at your console.  This will build everything you need to the /build folder.  All HTML, CSS and JS files will be copied into here.  The JS will be minified, and the correct references will be inserted for the `<script>` tags.  Only jQuery is still standalone.

You'll get to two JS files from this build process:

1. index.js, which will include your code
1. vendor.js, which will include only the parts of KendoUI Pro that you're using.  This is just over 800Kb in size, as opposed to 2.7Meg for the kendo.all.min.js file.  (That should go down to 300Kb vs 1 Meg when gzipped by your web server).

The build process uses Gulp task runner, which runs tasks to:

1. Clear out the current contents of the /build folder
1. Copy over necessary HTML and CSS files from the /src folder to the /build folder
1. Remove the development script tags and replace them with new ones pointing to the build JS files, which are created by Webpack.


##SystemJS Version
I've also include a SystemJS version.

SystemsJS loads up the module files on the fly, so there is no build step.  Simply open the file /src/index-systemjs.html in a local web server to see this version.  If you refresh the page with your browser's Developer Toosl open, set to the Network tab, then you can see the files loading.

Using SystemsJS to load your modules in this way can be a slow process, as it loads up each module file, one at a time (unlike Webpack, which combines them into one or two bigger files, ahead of time).  You won't notice too much on a small, test project like this one, but I've found it to be slow enough to make it unusable for bigger projects.  Any advice on how to approach this problem would be most welcome!

One way to cut down on the file loading times would be to point SystemJS to the minified versions of the Kendo libraries rather than at the source versions, which Webpack prefers.  However, in addition to being in separate folders (not a problem), the different file types also follow different naming conventions: .e.g  kendo.core.min.js vs kendo.core.js.  Unfortunately, I couldn't find a way to get SystemJS to do an on-the-fly substitution of kendo.*.min.js for kendo.*.js.  Nor could I find a way to have Webpack do the reverse.  I didn't want to maintain two separate code bases just for this boilerplate demo, so both systems are loading the source versions at present.  If anybody _does_ know a way of doing this, please let me know!!


