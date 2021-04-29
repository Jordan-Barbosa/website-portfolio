import { combineReducers } from 'redux';
import { projectsReducer } from './reducers/projects';

export const reducers = combineReducers({
  projects: projectsReducer,
});
