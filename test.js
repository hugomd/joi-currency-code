const test = require('ava');
const Joi = require('joi')
  .extend(require('./src/joi-currency-code'));

const schema = Joi.object({
  code: Joi.string().currency(),
});

test('should succeed if currency code is valid - lowercase', t => {
  const output = schema.validate({
    code: 'aud',
  });

  t.deepEqual(output.value, {code: 'AUD'});
});

test('should succeed if currency code is valid - uppercase', t => {
  const output = schema.validate({
    code: 'AUD',
  });

  t.deepEqual(output.value, {code: 'AUD'});
});

test('should fail if currency code is invalid', t => {
  const {error: {message}} = schema.validate({
    code: 'fake-currency',
  });

  t.is(message, '"code" must be a valid ISO 4217 currency code');
});

test('should fail if currency code type is boolean', t => {
  const {error: {message}} = schema.validate({
    code: 123,
  });

  t.is(message, '"code" must be a string');
});

test('should fail if currency code type is object', t => {
  const {error: {message}} = schema.validate({
    code: {},
  });

  t.is(message, '"code" must be a string');
});
