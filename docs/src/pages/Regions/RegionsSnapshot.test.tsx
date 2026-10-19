import { expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { store } from '../../store/store.ts';
import Regions from './Regions';
import { Provider } from 'react-redux';

it('RegionsSnapshot', () => {
  const result = render(
    <Provider store={store}>
      <Regions />
    </Provider>
  )
  expect(result).toMatchSnapshot()
})