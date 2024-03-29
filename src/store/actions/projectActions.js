import {CREATE_PROJECT, CREATE_PROJECT_ERROR} from './actionTypes';

export const createProject = ({project}) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    firestore
      .collection('projects')
      .add({
        ...project,
        authorFirstName: 'Owen',
        authorLastName: 'Zhong',
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({type: CREATE_PROJECT, project});
      })
      .catch(err => {
        dispatch({type: CREATE_PROJECT_ERROR}, err);
      });
  };
};
