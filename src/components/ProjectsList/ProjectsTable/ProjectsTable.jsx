import s from './ProjectsTable.module.css';
import del_icon from '../delete.png';

const ProjectsTable = () => {
    return (
        <div className={s.projects_table}>
            <div className={s.table_line + ' ' + s.table_header}>
                <div className={s.table_col + ' ' + s.table_check}>
                    <input type="checkbox" className={s.table_checkBox} />
                </div>
                <div className={s.table_col}>Название проекта</div>
                <div className={s.table_col}>Дата</div>
                <div className={s.table_col + ' ' + s.table_delete}>
                    <button className={s.project_delOpen}><img src={del_icon} /></button>
                </div>
            </div>
            <div className={s.table_line}>
                <div className={s.table_col + ' ' + s.table_check}>
                    <input type="checkbox" className={s.table_checkBox} />
                </div>
                <div className={s.table_col}>Строительство дома в Москве</div>
                <div className={s.table_col}>29.11.2001</div>
                <div className={s.table_col + ' ' + s.table_delete}>
                    <button className={s.project_delOpen}>
                        <img src={del_icon} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProjectsTable