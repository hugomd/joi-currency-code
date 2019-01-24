const test = require('ava');
const JoiBase = require('joi');
const Joi = require('./src/joi-currency-code')(JoiBase);

const schema = Joi.object({
  code: Joi.string().currency()
});

test('should succeed if currency code is valid', t => {
  const output = Joi.validate({
    code: 'aud'
  }, schema);

  t.deepEqual(output.value, {code: 'AUD'});
});

test('should fail if currency code is invalid', t => {
  const {error: {message}} = Joi.validate({
    code: 'fake-currency'
  }, schema);

  t.is(message, 'child "code" fails because ["code" needs to be a valid ISO 4217 currency code]');
});

test('should fail if currency code type is boolean', t => {
  const {error: {message}} = Joi.validate({
    code: 123
  }, schema);

  t.is(message, 'child "code" fails because ["code" must be a string]');
});

test('should fail if currency code type is object', t => {
  const {error: {message}} = Joi.validate({
    code: {}
  }, schema);

  t.is(message, 'child "code" fails because ["code" must be a string]');
});
