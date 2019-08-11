import {CREATE_PROJECT, CREATE_PROJECT_ERROR} from '../actions/actionTypes';

const initState = {
  projects: [
    {id: '1', title: 'project 1', content: 'content 1'},
    {id: '2', title: 'project 2', content: 'content 2'},
    {id: '3', title: 'project 3', content: 'content 3'},
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      console.log('create project', action.project);
      break;
    case CREATE_PROJECT_ERROR:
      console.log('create project error', action.err);
      break;
    default:
      break;
  }
  return state;
};

export default projectReducer;
