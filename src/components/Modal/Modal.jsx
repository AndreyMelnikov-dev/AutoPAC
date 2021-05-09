import s from './Modal.module.css';

const Modal = (props) =>{
    return(
        <div className={props.active ? s.modal + ' ' + s.active : s.modal}>
            <div className={s.modal__cont}>
                <span className={s.modal__close}>&times;</span>
                {props.children}
            </div>
        </div>
    )
}

export default Modal;