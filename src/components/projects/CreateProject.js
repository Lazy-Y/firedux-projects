import React, {useState, useCallback} from 'react';
import {createProject} from '../../store/actions/projectActions';
import {connect} from 'react-redux';

const CreateProject = ({createProject}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const onChangeTitle = useCallback(e => {
    setTitle(e.target.value);
  }, []);
  const onChangeContent = useCallback(e => {
    setContent(e.target.value);
  }, []);
  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      createProject({project: {title, content}});
    },
    [title, content],
  );

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create Project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={onChangeTitle} />
        </div>
        <div className="input-field">
          <label htmlFor="Content">Content</label>
          <input type="text" id="content" onChange={onChangeContent} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(CreateProject);
