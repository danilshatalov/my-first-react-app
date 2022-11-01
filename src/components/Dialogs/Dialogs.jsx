import style from './Dialogs.module.css'

function Dialogs() {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <div className={style.dialog}>
                    Robert
                </div>
                <div className={`${style.dialog} ${style.active}`}>
                    Alexandra
                </div>
                <div className={style.dialog}>
                    Elizabeth
                </div>
                <div className={style.dialog}>
                    Margaret
                </div>
                <div className={style.dialog}>
                    Phillip
                </div>
                <div className={style.dialog}>
                    Megan
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>
                    Hola
                </div>
                <div className={style.message}>
                    Hey
                </div>
                <div className={style.message}>
                    Lol
                </div>
                <div className={style.message}>
                    Whats going on?
                </div>
            </div>
        </div>
    );
}

export default Dialogs;