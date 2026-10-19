import { expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { store } from '../store/store.ts';
import Navigation from './Navigation.tsx';
import { Provider } from 'react-redux';

it('ChatWindowSnapshot', () => {
  const result = render(
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
  expect(result).toMatchSnapshot()
})