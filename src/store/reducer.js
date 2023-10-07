import { combineReducers } from 'redux';
import * as _ from 'lodash';

const projects = (state = {}, action) => {
  switch (action.type) {
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
      console.log('и я работаю', id, newStatus)

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
      const { projectId } = action.payload; // данные
      return projectId;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  projects,
  tasks,
  currentProjectId,
});

export default rootReducer;