import del_icon from '../../delete.png';
import { NavLink } from 'react-router-dom';
import s from './ProjectsListTableElement.module.css';

const ProjectsListTableElement = (props) => {
    if (props.project_id != 0) {
        return (
            <div className={s.table_row}>
                <NavLink to={'/Project/' + props.project_id + '/Settings'} className={s.table_col + ' ' + s.table_name}>{props.project_name}</NavLink>
                <NavLink to={'/Project/' + props.project_id + '/Settings'} className={s.table_col}>{props.project_date}</NavLink>
                <div className={s.table_col + ' ' + s.tabel_del}>
                    <button className={s.table_delete} onClick={() => { props.setActive(true); props.setDeleteId(props.project_id); props.setDeleteName(props.project_name) }}><img src={del_icon} /></button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className={s.table_row}>
                <div className={s.table_col + ' ' + s.table_name}>{props.project_name}</div>
                <div className={s.table_col}>{props.project_date}</div>
                <div className={s.table_col + ' ' + s.tabel_del}></div>
            </div>
        )
    }

}

export default ProjectsListTableElement;