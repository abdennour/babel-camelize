import expect from 'expect';

import Camelize, {
 CamelCase
} from '../src';

describe(`Object Camelize`, () => {
 it(`camelizes simple object`, () => {
  const target = {
   first_name: 'Babel',
   last_name: 'Camelize'
  };
  let actual = Camelize(target);
  let expected = {
   firstName: 'Babel',
   lastName: 'Camelize'
  };
  expect(actual).toEqual(expected);
 });
 it(`camelizes  object with nested objects`, () => {
  const target = {
   first_name: 'Abdennour',
   last_name: 'TOUMI',
   business: {
    entity_name: 'Rathath-IT',
    entity_type: 'Company'
   }
  };
  let actual = Camelize(target);
  let expected = {
   firstName: 'Abdennour',
   lastName: 'TOUMI',
   business: {
    entityName: 'Rathath-IT',
    entityType: 'Company'
   }
  };
  expect(actual).toEqual(expected);
 });

 it(`camlizes a so complex object`, () => {
  const now = new Date();
  const target = {
   fee_fie_foe: 'fum',
   beep_boop: [{
    'abc.xyz': 'mno'
   }, {
    'foo-bar': 'baz',
    'date.now': now,
    'name-regex': /name$/
   }]
  };
  let expected = {

   feeFieFoe: 'fum',
   beepBoop: [{
    'abcXyz': 'mno'
   }, {
    'fooBar': 'baz',
     'dateNow': now,
     'nameRegex': /name$/
   }]
  };
   expect(Camelize(target)).toEqual(expected);
 })
 it(`forwards call to "CamelCase" if input is "string" not object`, () => {
  const target = 'aaa_bbb';
  expect(Camelize(target)).toEqual('aaaBbb');
 });
 it(`returns the same object if it is an instance of Date`, () => {
    const target = new Date();
    expect(Camelize(target))
 });

});

describe(`String CamelCase`, () => {
 it(`camelizes strings`, () => {
  const target = 'record_number';
  expect(CamelCase(target)).toEqual('recordNumber');
 });
})
