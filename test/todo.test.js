/* eslint-disable new-cap */

import { todoFactory } from '../src/modules/todo';

const { test, expect } = require('@jest/globals');

const todo = new todoFactory('Todo', 'Todo Jest', '12-12-2020', 'High', false);

test('It has a name of Learn', () => {
  expect(todo.title).toBe('Todo');
});

test('It has a description of testing Jest', () => {
  expect(todo.description).toBe('Todo Jest');
});

test('It is has a date', () => {
  expect(todo.date).toBe('12-12-2020');
});

test('It is has a priority', () => {
  expect(todo.priority).toBe('High');
});

test('It is active project when it is created', () => {
  expect(todo.completed).toBe(false);
});
/* eslint-enable new-cap */
