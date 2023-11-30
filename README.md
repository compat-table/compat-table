# OnSign TV ECMAScript compatibility tables

Compatibility tables for ECMAScript on OnSign TV supported platforms

In order to build this project you'll need Node 14+ installed on your machine.

## Building

First, fill `custom/internalEnv.json` and `custom/internalResults.json` with the supported platforms and with test results. Then run:

```npm run buildInternal```

The resulting `index.html` inside each top-level folder (`es5`, `es6`, `es2016plus`) will contain the resulting HTMLs.

## Scraping

This project can be run in 'scraper mode'. First build the project with:

```npm run buildScraper```

Then run the `scraper.go` Go server on your machine:

```go run scraper.go -h 127.0.0.1 -p 8080```

Any machine that accesses the host/port specified to `scraper.go` will run the required tests, and save the results inside the `upload/` folder.
