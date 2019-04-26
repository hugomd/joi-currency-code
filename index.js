const isCurrencyCode = require('is-currency-code');

module.exports = Joi => {
  return Joi.extend(Joi => ({
    name: 'string',
    base: Joi.string(),
    language: {
      currency: 'needs to be a valid ISO 4217 currency code'
    },
    rules: [
      {
        name: 'currency',
        validate(params, value, state, options) {
          if (!isCurrencyCode(value)) {
            return this.createError('string.currency', {v: value}, state, options);
          }

          return value.toUpperCase();
        }
      }
    ]
  }));
};