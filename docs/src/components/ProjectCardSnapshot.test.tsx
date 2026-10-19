import { expect, it } from 'vitest';
import { render } from '@testing-library/react';
import ProjectCard from './ProjectCard';
import { cardOne } from '../pages/Project/CardData.ts';

it('ProjectCardSnapshot', ({
  isAnimationActive = true,
  defaultIndex,
}: {
  isAnimationActive?: boolean;
  defaultIndex?: any;
}) => {
  const result = render(
    <ProjectCard
        chartType='pie'
        title='Estimates'
        summary={cardOne}
        isAnimationActive={isAnimationActive}
        defaultIndex={defaultIndex}
    />
  )
  expect(result).toMatchSnapshot()
})