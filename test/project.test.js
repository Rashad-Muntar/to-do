/* eslint-disable new-cap */

import { projectFactory } from '../src/modules/project';

const { test, expect } = require('@jest/globals');

const project = new projectFactory('Jest', 'testing Jest', '12-12-2020', 'High', false);

test('It has a name of Learn', () => {
  expect(project.title).toBe('Jest');
});

test('It has a description of testing Jest', () => {
  expect(project.description).toBe('testing Jest');
});

test('It is active project when it is created', () => {
  expect(project.completed).toBe(false);
});

test('It is has a date', () => {
  expect(project.date).toBe('12-12-2020');
});

test('It is has a priority', () => {
  expect(project.priority).toBe('High');
});
/* eslint-enable new-cap */
