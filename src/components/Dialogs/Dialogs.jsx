import style from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';


function Dialogs(props) {

    let dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)


    let messagesElements = props.messages.map(m => <Message message={m.message} />)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;