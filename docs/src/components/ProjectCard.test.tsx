import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';
import { cardOne } from '../pages/Project/CardData';

test('Project card renders given chart type- pie', () => {

    let defaultIndex;

    render(
      <ProjectCard
          chartType='pie'
          title='Estimates'
          summary={cardOne}
          isAnimationActive={true}
          defaultIndex={defaultIndex}
          />
    );

    const divElement = document.querySelector('.recharts-pie');
  
    expect(divElement).toBeTruthy();
});