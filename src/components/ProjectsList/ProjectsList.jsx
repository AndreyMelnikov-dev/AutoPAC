import s from './ProjectsList.module.css';
import {useState} from 'react';
import del_icon from './delete.png';
import Modal from '../Modal/Modal';
import ProjectsTable from './ProjectsTable/ProjectsTable';

const ProjectsList = () => {
    const [modalActive, setModalActive] = useState(false)
    
    return (
        <div className={s.projectsList_wrapper}>
            <h2 className={s.projectsList_title}>Ваши проекты</h2>
            <div className={s.actions_line}>
                <button className={s.actions_delete}>
                    <img src={del_icon} />
                </button>
                <button className={s.actions_create} onClick={() => setModalActive(true)}>Добавить</button>
            </div>
            <ProjectsTable />
            <Modal active={modalActive} setActive={setModalActive}>
                <p>Нихуя себе, это модалка!</p>
            </Modal>
        </div>
    )
}

export default ProjectsList