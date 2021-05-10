import s from './Modal.module.css';

const Modal = (props) =>{
    return(
        <div className={props.active ? s.modal + ' ' + s.active : s.modal} onClick={()=>{props.setActive(false)}}>
            <div className={s.modal__cont} onClick={e => e.stopPropagation()}>
                <span className={s.modal__close} onClick={()=>{props.setActive(false)}}>&times;</span>
                {props.children}
            </div>
        </div>
    )
}

export default Modal;