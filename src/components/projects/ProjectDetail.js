import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect, isLoaded, isEmpty} from 'react-redux-firebase';

const ProjectDetail = props => {
  const {project} = props;
  if (!isLoaded(project)) {
    return <div>Loading...</div>;
  }
  if (isEmpty(project)) {
    return <div>Project List Is Empty</div>;
  }
  const {
    title,
    content,
    authorFirstName: firstName,
    authorLastName: lastName,
    createdAt,
  } = project;
  const date = new Date(createdAt.seconds * 1000);

  return (
    <div className="container section project-details">
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{title}</span>
            <p>{content}</p>
          </div>
          <div className="card-action gret lighten-4 grey-text">
            <div>
              Posted by The {firstName} {lastName}
            </div>
            <div>{date.toLocaleString()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  console.log('state', state);
  const {id} = props.match.params;
  const {projects} = state.firestore.data;
  return {project: projects && projects[id]};
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => ['projects']),
)(ProjectDetail);
