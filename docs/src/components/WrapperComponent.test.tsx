import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { store } from '../store/store.ts';
import WrapperComponent from './WrapperComponent.tsx';
import { Provider } from 'react-redux';

test('Route wrapper is responding', () => {

    render(
      <Provider store={store}>
        <WrapperComponent />
      </Provider>
    );
  
    const element = screen.queryByText('Solar Power - Industrial Insights');
    expect(element).not.toBeNull(); 
});