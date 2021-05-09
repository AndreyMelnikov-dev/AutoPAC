import s from './ProjectsListTable.module.css';
import ProjectsListTableElement from './ProjectsListTableElement/ProjectsListTableElement';

const ProjectsListTable = (props) => {

    let projects = props.projects.map(p =>
        <ProjectsListTableElement project_name={p.name} project_date={p.date} project_id={p.id}/>
    )

    return (
        <div className={s.projects_table}>
            <div className={s.table_row + ' ' + s.table_header}>
                <div className={s.table_col + ' ' + s.table_name}>Название проекта</div>
                <div className={s.table_col}>Дата</div>
                <div className={s.table_col}></div>
            </div>
            {projects}
        </div>
    )
}

export default ProjectsListTable;