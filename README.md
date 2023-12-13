# OnSign TV ECMAScript compatibility tables

Compatibility tables for ECMAScript on OnSign TV supported platforms.

## Building

In order to build this project you'll need Node 14+ installed on your machine.

First, fill `custom/internalEnv.json` and `custom/internalResults.json` with the supported platforms and with test results. Then run:

```npm run buildInternal```

The resulting `index.html` inside each top-level folder (`es5`, `es6`, `es2016plus`) will contain the resulting HTMLs.

## Scraping

This project can be run in 'scraper mode'. First build the project with:

```npm run buildScraper```

Then run the `scraper.go` Go server on your machine:

```go run scraper.go -h 127.0.0.1 -p 8080```

You then need to access the host/port specified to `scraper.go` with these query parameters:

```http://127.0.0.1:8080/osVersion=Windows_10&playerVersion=9.10.10#scrape```

will run the required tests, and save the results to the `upload/` folder.

The `upload_parse.py` script can then be ran to parse the uploaded results and store them at `custom/internalEnvs.json` and `custom/internalResults.json`.
