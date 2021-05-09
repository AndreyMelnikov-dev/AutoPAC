import './App.css';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
// Components
import Header from './components/Header/Header';
import ProjectsListContainer from './components/ProjectsList/ProjectsListContainer';


function App() {
  return (
    <div className="app_wrapper">
      <Header />
      <Route path="/ProjectsList" render={() => <ProjectsListContainer />}/>
    </div>
  );
}

export default App;
