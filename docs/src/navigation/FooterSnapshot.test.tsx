import { expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { store } from '../store/store.ts';
import Footer from './Footer';
import { Provider } from 'react-redux';

it('FooterSnapshot', () => {
  const result = render(
    <Provider store={store}>
      <Footer />
    </Provider>
  )
  expect(result).toMatchSnapshot()
})