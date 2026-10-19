import { expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { store } from '../../store/store.ts';
import Homepage from './Homepage';
import { Provider } from 'react-redux';

it('HomepageSnapshot', () => {
  const result = render(
    <Provider store={store}>
      <Homepage />
    </Provider>
  )
  expect(result).toMatchSnapshot()
})