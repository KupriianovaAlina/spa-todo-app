import { combineReducers } from 'redux';
import * as _ from 'lodash';

const projects = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const modal = (state = {}, action) => {
  let cloneState;
  switch (action.type) {
    case 'OPEN_MODAL':
      const { type } = action.payload;
      cloneState = _.cloneDeep(state);
      cloneState.type = type;
      cloneState.status = (action.payload.status) ? action.payload.status : null;
      cloneState.taskId = (action.payload.taskId) ? action.payload.taskId : null;
      return cloneState;
    case 'CLOSE_MODAL':
      cloneState = _.cloneDeep(state);
      cloneState.type = null;
      return cloneState;
    default:
      return state;
  }
};

const tasks = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_NEW_TASK':
      const { newTask } = action.payload;
      return [...state, newTask];
    case 'CHANGE_TASK_STATUS':
      const { id, newStatus } = action.payload;
      const [task] = state.filter((task) => task.id === id);
      const stateWithoutTask = state.filter((task) => task.id !== id);
      const cloneTask = _.cloneDeep(task);
      cloneTask.status = newStatus;
      return [...stateWithoutTask, cloneTask]
    default:
      return state;
  }
};

const currentProjectId = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PROJECT_ID':
      const { projectId } = action.payload;
      return projectId;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  projects,
  modal,
  tasks,
  currentProjectId,
});

export default rootReducer;