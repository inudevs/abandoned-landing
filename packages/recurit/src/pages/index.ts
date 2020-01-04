import loadable from '@loadable/component';

export const About = loadable(() => import('./About'));
export const Course = loadable(() => import('./Course'));
export const Home = loadable(() => import('./Home'));
export const Job = loadable(() => import('./Job'));

export const JobDesigner = loadable(() => import('./jobs/Designer'));
export const JobDeveloper = loadable(() => import('./jobs/Developer'));
export const JobMarketer = loadable(() => import('./jobs/Marketer'));
