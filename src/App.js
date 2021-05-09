import './App.css';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
// Components
import Header from './components/Header/Header';
import ProjectsList from './components/ProjectsList/ProjectsList'


function App() {
  return (
    <div className="app_wrapper">
      <Header />
      <Route path="/ProjectsList" render={() => <ProjectsList />}/>
    </div>
  );
}

export default App;
