import ProjectsList from '../ProjectsList';
import s from './ProjectsListActions.module.css';
import Modal from '../../Modal/Modal';

const ProjectsListActions = () =>{
    return (
        <div className={s.projects_actions}>
            <button className={s.action_add}>Создать проект</button>
            <Modal>
                
            </Modal>
        </div>
    )
}

export default ProjectsListActions;