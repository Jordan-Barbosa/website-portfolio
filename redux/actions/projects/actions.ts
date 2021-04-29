import type { Project } from 'ROOT';

import * as ActionTypes from '@redux/types/projects';

export const setProjectsLoading = () => ({
  type: ActionTypes.PROJECTS_LOADING,
});

export const setProjectsError = () => ({
  type: ActionTypes.PROJECTS_LOADED_ERROR,
});

export const setProjectsList = (projects: Project[]) => ({
  type: ActionTypes.SET_PROJECTS,
  payload: projects,
});
