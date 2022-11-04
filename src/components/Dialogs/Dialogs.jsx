import style from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'



function Message(props) {
    return (
        <div className={style.message}>{props.message}</div>
    );
}


function DialogItem(props) {
    let path = '/dialogs' + props.id;
    return (
        <div className={style.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

function Dialogs() {

    let dialogs = [
        { id: 1, name: 'Robert' },
        { id: 2, name: 'Alexandra' },
        { id: 3, name: 'Phillip' },
        { id: 4, name: 'Tina' },
        { id: 5, name: 'Manola' },
        { id: 6, name: 'Margaret' }
    ];

    let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

    let messages = [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'Whats up?' },
        { id: 3, message: 'Hey bro' },
        { id: 4, message: 'And you?' },
        { id: 5, message: 'What?' },
        { id: 6, message: 'Okrrr' }
    ];

    let messagesElements = messages.map(m => <Message message={m.message} />)

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