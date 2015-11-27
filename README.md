# Brunch on Rocket

Brunch on Rocket is a [Brunch](http://brunch.io/) skeleton that utilizes [Bootstrap](http://getbootstrap.com/), and [LESS](http://lesscss.org/) / [SASS](http://sass-lang.com/). Brunch on Rocket is an updated version of [Brunch with Steak](https://github.com/oddpixel/brunch-steak) with the addition of Browser Sync.

## Installation
Skeleton install: `brunch new gh:djkmiles/brunch-rocket <your-project-name>`.

Or simply copy the repository to your hard drive and rename it.

## Getting started

* Install (if you don't have them):
    * [Node.js](http://nodejs.org)
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * [Bower](http://bower.io): `npm install -g bower`
    * Brunch plugins and Bower dependencies: `npm install` & `bower install` 
* Run:
    * `brunch watch --server` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `brunch build --production` — builds minified project for production
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * [Brunch site](http://brunch.io)

## Customize Bootstrap Stylesheets

All Bootstrap stylesheet files can be found separated into:

	vendor/styles/bootstrap
		
They're in original [LESS](http://lesscss.org/) format in order to be easily customized, and compiled together with the app build.

## Exclude Bootstrap jQuery plugins

jQuery plugins used by Bootstrap are all listed (in the right order) inside the config.coffee file. Comment out the ones you want to exclude from the build with a #. (Pay attention to dependencies!)
