import { useState } from 'react';
import s from './ProjectsListActions.module.css';
import Modal from '../../Modal/Modal';
import { reduxForm, Field } from 'redux-form';

const ProjectsForm = (props) => {
    return (
        <form className={s.list_actions} onSubmit={props.handleSubmit}>
            <Field placeholder={'Название проекта'} name='project_name' component={'input'} />
            <Field placeholder={'Дата'} name='project_date' component={'input'} />
            <button onClick={()=>{}}>Создать новый проект</button>
        </form>
    )
}

const ProjectsReduxForm = reduxForm({
    form: 'project'
})(ProjectsForm);

const ProjectsListActions = (props) => {

    const onSubmit = (formData1) => {
        props.addProjectAC(formData1.project_name, formData1.project_date)
        props.reset('project')
        setModalActive(false)
    }

    const [modalActive, setModalActive] = useState(false)
    
    return (
        <div className={s.projects_actions}>
            <button className={s.action_add} onClick={() => setModalActive(true)}>Создать проект</button>
            <Modal active={modalActive} setActive={setModalActive}>
                <ProjectsReduxForm onSubmit={onSubmit}/>
            </Modal>
        </div>
    )
}

export default ProjectsListActions;