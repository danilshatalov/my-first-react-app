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

    let dialogsData = [
        { id: 1, name: 'Robert' },
        { id: 2, name: 'Alexandra' },
        { id: 3, name: 'Phillip' },
        { id: 4, name: 'Tina' },
        { id: 5, name: 'Manola' },
        { id: 6, name: 'Margaret' }
    ];

    let messagesData = [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'Whats up?' },
        { id: 3, message: 'Hey bro' },
        { id: 4, message: 'And you?' },
        { id: 5, message: 'What?' },
        { id: 6, message: 'Okrrr' }
    ];

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
            </div>
            <div className={style.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message} />
                <Message message={messagesData[4].message} />
                <Message message={messagesData[5].message} />
            </div>
        </div>
    );
}

export default Dialogs;