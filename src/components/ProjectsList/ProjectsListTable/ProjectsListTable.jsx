import s from './ProjectsListTable.module.css';
import ProjectsListTableElement from './ProjectsListTableElement/ProjectsListTableElement';
import { useState } from 'react';
import Modal from '../../Modal/Modal';

const ProjectsListTable = (props) => {

    const [modalActive, setModalActive] = useState(false)
    const [deleteId, setDeleteId] = useState(undefined)
    const [deleteName, setDeleteName] = useState(undefined)

    let projects = props.projects.map(p =>
        <ProjectsListTableElement setActive={setModalActive} setDeleteId={setDeleteId} setDeleteName={setDeleteName} deleteProjectAC={props.deleteProjectAC} project_name={p.name} project_date={p.date} project_id={p.id} />
    )

    let deleteProject = () => {
        props.deleteProjectAC(deleteId)
        console.log(deleteId)
        setModalActive(false)
    }

    return (
        <div className={s.projects_table}>
            <div className={s.table_row + ' ' + s.table_header}>
                <div className={s.table_col + ' ' + s.table_name}>Название проекта</div>
                <div className={s.table_col}>Дата</div>
                <div className={s.table_col}></div>
            </div>
            {projects}

            <Modal active={modalActive} setActive={setModalActive}>
                Удалить данный проект - {deleteName}?
                <button onClick={() => { deleteProject() }}>Да</button>
            </Modal>
        </div>
    )
}

export default ProjectsListTable;