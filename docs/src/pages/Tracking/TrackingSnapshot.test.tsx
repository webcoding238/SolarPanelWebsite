import { expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { store } from '../../store/store.ts';
import Tracking from './Tracking';
import { Provider } from 'react-redux';

it('TrackingSnapshot', () => {
  const result = render(
    <Provider store={store}>
      <Tracking />
    </Provider>
  )
  expect(result).toMatchSnapshot()
})