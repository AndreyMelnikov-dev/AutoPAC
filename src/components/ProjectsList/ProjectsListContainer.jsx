import ProjectsList from './ProjectsList';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { addProjectAC, deleteProjectAC } from '../../redux/projects-reducer';
import { reset } from 'redux-form';

const mapStateToProps = (state) => {
  return {
    projects: state.projectsList.projects,
  }
}


export default withRouter
(connect(mapStateToProps, {reset})
  (ProjectsList));
