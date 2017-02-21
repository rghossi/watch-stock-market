# watch-stock-market
freeCodeCamp back-end challenge

Live demo: https://watch-stock-market.herokuapp.com/

This is a [freeCodeCamp](https://www.freecodecamp.com/challenges/chart-the-stock-market) back-end challenge implementation.

It was built using Node, React (+ react-hot-loader), Redux, Express and Socket.io.

## Basic/required Features

* I can view a graph displaying the recent trend lines for each added stock.
* I can add new stocks by their symbol name.
* I can remove stocks.
* I can see changes in real-time when any other user adds or removes a stock.

## Room for Improvements

* Update chart data dinamycally/without reloading entire component (probably replacing chart.js with Highcharts since the former has a redraw property that reloads the entire graph intead of just removing the desired line. When inserting elements it works fine though)
* Improve website desgin and responsiveness.
* Generate random color for each stock market (should've done that already, but if I really replace chart.js with highcharts this will be solved since highcharts comes with default colors)

## Running Instructions

Firsts things first, run `npm install` to get all packages needed (it might take a while).

1st terminal tab: `npm run dev`

2nd terminal tab: `npm run dev:server` (to enable react-hot-reload)

Then, just open your browser at `http://localhost:8080`

To simulate a production environment, you only need 1 terminal tab to run `npm start`.

## Additional commands

`npm run build` to bundle everything using webpack

`npm run build:watch` it keeps listening for changes