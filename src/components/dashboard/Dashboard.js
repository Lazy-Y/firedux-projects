import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect, isLoaded, isEmpty} from 'react-redux-firebase';

const Dashboard = ({projects, firebase}) => {
  if (!isLoaded(projects)) {
    return <div>Loading...</div>;
  }
  if (isEmpty(projects)) {
    return <div>Project List Is Empty</div>;
  }
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    projects: state.firestore.ordered.projects,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => ['projects']),
)(Dashboard);
