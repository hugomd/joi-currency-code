const isCurrencyCode = require('is-currency-code');

module.exports = joi => {
  return {
    base: joi.string(),
    type: 'string',
    messages: {
      'currency.base': '"{{#label}}" must be a valid ISO 4217 currency code'
    },
    rules: {
      currency: {
        validate(value, helpers) {
          if (!isCurrencyCode(value)) {
            return helpers.error('currency.base');
          }

          return value.toUpperCase();
        }
      }
    }
  };
};
