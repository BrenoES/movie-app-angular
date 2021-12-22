import 'jest-preset-angular/setup-jest';
import '@testing-library/jest-dom';

Object.defineProperty(window, 'scrollTo', {
  value: () => ({}),
  writable: true,
});
