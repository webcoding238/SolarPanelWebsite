import { expect, it } from 'vitest';
import { render } from '@testing-library/react';
import ChatWindow from './ChatWindow';

it('ChatWindowSnapshot', () => {
  const result = render(
    <ChatWindow />
  )
  expect(result).toMatchSnapshot()
})