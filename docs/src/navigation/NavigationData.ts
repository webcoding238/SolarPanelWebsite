import type { navigationType } from '../types/navigation'
import type { subTitleType } from '../types/navigation'

export const navigation: navigationType[] = [
  {title: 'Project Overview', route: 'Project', keyC: '1'},
  {title: 'Regional Statistics', route: 'Regions', keyC: '2'},
  {title: 'Historical Tracking', route: 'Tracking', keyC: '3'}
];

export const subTitles: subTitleType[] = [
  {title: 'Department of Economics', keyC: '1'},
  {title: 'Reported by Project Data Enterprises', keyC: '2'},
  {title: 'Manager: George Payne', keyC: '3'}
];

export const Title = 'Solar Panel Industry Statistical Analysis';

export const BoilerPlatePh1 = 'Copyright 2026 - George Payne - All content is fictional.';

export const BoilerPlatePh2 = 'Some facts about solar energy are based on research. Feel free to do your own fact checking.';

export const BoilerPlatePh3 = 'Built with React, Vite, Redux Toolkit, TypeScript, dummy data from RTK API calls, and Rechart.js';

export const BoilerPlatePh4 = 'Build technologies include:';

export const BoilerPlatePh5 = 'Docker, GitHub Actions, and Elastic Beanstalk for the Continuous Integration website hosting.';

export const BoilerPlatePh6 = 'Was hosting on a local server. Now using Vercel Github CI/CD.';