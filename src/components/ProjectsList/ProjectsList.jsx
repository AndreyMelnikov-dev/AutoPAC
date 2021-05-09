import s from './ProjectsList.module.css';
import ProjectsListActions from './ProjectsListActions/ProjectsListActions';
import ProjectsListTable from './ProjectsListTable/ProjectsListTable';

const ProjectsList = (props) =>{
    return (
        <div className={'projects_wrapper'}>
            <h2 className={s.projects_title}>Ваши проекты</h2>
            <ProjectsListActions />
            <ProjectsListTable projects={props.projects} />
        </div>
    )
}

export default ProjectsList;