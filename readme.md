# 💰 joi-currency-code

[![npm](https://img.shields.io/npm/v/joi-currency-code.svg?maxAge=2592000)](https://www.npmjs.com/package/joi-currency-code) [![Build Status](https://travis-ci.org/hugomd/joi-currency-code.svg?branch=master)](https://travis-ci.org/hugomd/joi-currency-code/builds) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo) 

> A Joi validator that validates whether a given input is a valid currency code, according to ISO 4217.

## Installation

```javascript
npm install joi-currency-code
```

## Usage

```javascript
const Joi = require('@hapi/joi').extend(require('joi-currency-code'));

const schema = Joi.object({
  code: Joi.string().currency()
});

Joi.validate({
  code: 'aud'
}, schema); // succeeds

Joi.validate({
  code: 'fake-currency'
}, schema); // fails with ValidationError
```

## Contributing

* `git clone git@github.com:hugomd/joi-currency-code.git`
* `npm install`
* Make your changes
* Open a pull request and ask for review ✌️
* Optional: use emoji in your commits 🔥

## Related Repositories

* [`is-currency`](https://github.com/hugomd/is-currency)
* [`is-currency-code`](https://github.com/hugomd/is-currency-code)
* [`is-currency-symbol`](https://github.com/hugomd/is-currency-symbol)
