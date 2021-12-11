# pe-paladins.js

![NPM License](https://img.shields.io/npm/l/pe-paladins.js.svg?style=flat) 
![Downloads](https://img.shields.io/npm/dm/pe-paladins.js.svg?style=flat)
[![Production Test & Deploy](https://github.com/tusharlock10/pe-paladins.js/actions/workflows/production-deploy.yml/badge.svg)](https://github.com/tusharlock10/pe-paladins.js/actions/workflows/production-deploy.yml)

A strongly typed fork of [paladins.js](https://www.npmjs.com/package/paladins.js), used by [Paladins Edge](https://paladinsedge.ml)

- Well maintained and up-to-date library
- All of the methods have the exact response type
- Updated champion enums to include `Azaan` as per `Absolution` patch
- Does not rely on any Node specific libraries like `fs` or `path`


## Changelog

### v3.2.1
- *BREAKING CHANGE*: renamed `GetMatchIDSByQueue` ApiResponse interface to `GetMatchIdsByQueue`
- *BREAKING CHANGE*: renamed `Data` objects from capital to pascal case and changed keys from strings to enums
- Refactored `ApiResponse`, `Data`, `Enums`, `Strings` into their own folders
- Updated documentation for a few API methods
- Updated `getPlayerQueueStats` and `getMatchIdsByQueue` queueId params to be Enums.Queue instead of number
- Updated for `ApiResponse` property

>__Reason__: these changes are a part of the library refactoring and removing clutter, and making things consistent. These will be the last set of breaking changes.


## Install

```
$ npm install pe-paladins.js
```

## Usage

### TypeScript

```typescript
import { API, ApiResponse } from "pe-paladins.js";

const api = new API({
  devId: "your dev id",
  authKey: "your authKey",
  languageId: 1, // optional
}); // API loaded and ready to go.

const foo = async () => {
  let response: ApiResponse.GetDataUsage
  try {
    response = await api.getDataUsage()
    // Do something with response
  } catch(error) {
    // Handle the error
  }
}
```

### JavaScript

```javascript
const { API } = require("pe-paladins.js");

const api = new API({
  devId: "your dev id",
  authKey: "your authKey",
  languageId: 1, // optional
}); // API loaded and ready to go.

const foo = async () => {
  let response;
  try {
    response = await api.getDataUsage()
    // Do something with response
  } catch(error) {
    // Handle the error
  }
}
```

## Documentation / Methods

You can view all the available methods and documentation on [pe-paladins.paladinsedge.ml](https://pe-paladins.paladinsedge.ml/). Some of the methods are removed/changed in pe-paladins.js compared to paladins.js
