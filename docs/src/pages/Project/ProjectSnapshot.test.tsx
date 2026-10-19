import { expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { store } from '../../store/store.ts';
import Project from './Project';
import { Provider } from 'react-redux';

it('ProjectSnapshot', () => {
  const result = render(
    <Provider store={store}>
      <Project />
    </Provider>
  )
  expect(result).toMatchSnapshot()
})