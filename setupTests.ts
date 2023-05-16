import '@testing-library/jest-dom/extend-expect';

import mockAxios from 'jest-mock-axios';
afterEach(() => {
  mockAxios.reset();
});