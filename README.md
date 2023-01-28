# checkerjs [![NPM version](https://img.shields.io/npm/v/checkerjs.svg?style=flat)](https://www.npmjs.com/package/checkerjs) [![NPM monthly downloads](https://img.shields.io/npm/dm/checkerjs.svg?style=flat)](https://www.npmjs.com/package/checkerjs) [![NPM total downloads](https://img.shields.io/npm/dt/checkerjs.svg?style=flat)](https://www.npmjs.com/package/checkerjs)

> Check your data and validate your projects. Lightweight and easy to use data validation library for Node.js and the browser.

Please consider following this project's author, [Kadir Osman Ust](https://github.com/kadoraw), and consider starring the project to show your :heart: and support.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install checkerjs
```

Install with [yarn](https://yarnpkg.com/):

```sh
$ yarn add checkerjs
```

## Usage

Works with datas.

```js
import { isArray, isAnyNullorUndefined, isInRange,deepEquality } from 'checkerjs'

const isUndef = isAnyNullorUndefined([1, 2, 3, 4, 5, 0, null]) // => true
const isArr = isArray({}) // => false
const isInRange = isInRange([4, 2, 6, 2, 8, 9],6,1,3) // => true
//---------
const a = {
name:{
	firstname: "kadir",
	lastname: "osman"
},
age:23
}
const b= {
name:{
	firstname: "kadir",
	lastname: "osman"
},
age:23
}
const isEqual = deepEquality(a,b) // => true
```

## About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/KadoRaw/checkerjs/issues/new).

</details>

<details>
<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm run test
```

</details>

### Contributors

| **Commits** | **Contributor** | 
| --- | --- |
|  | [atilaykosker](https://github.com/atilaykosker) |


### Author

**Kadir Osman Ust**

* [LinkedIn Profile](https://linkedin.com/in/kadirosmanust)
* [GitHub Profile](https://github.com/kadoraw)


### License

Copyright © 2022, [Kadir Osman](https://github.com/kadoraw).
Released under the [MIT License](LICENSE).

***
