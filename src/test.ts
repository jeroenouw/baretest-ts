import baretest from 'baretest';
import assert from 'assert';
import { sum } from './sum';

import { Baretest } from './typings/baretest';

const test: Baretest = baretest('Baretest title');

test('1 + 2', () => {
  assert.equal(sum(1, 2), 3);
});

test('2 + 3', () => {
  assert.equal(sum(2, 3), 5);
});

test('2 + 7', () => {
  assert.equal(sum(2, 7), 5);
});

test.run();
