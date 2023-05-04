import React from "react";
import classes from "./Dialogs.module.css"
export type DialogsType = {
    message: string
}
export const Dialogs=(props: DialogsType) => {
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>Andrey</div>
                <div className={classes.dialog}>Viktor</div>
                <div className={classes.dialog}>Valerii</div>
                <div className={classes.dialog}>Kostya</div>
            </div>
            <div className={classes.mesages}>
                <div className={classes.message}>hi</div>
                <div className="message">hi 2</div>
                <div className="message">hi 3</div>
                <div className="message">hi 4</div>
                <div className="message">hi 5</div>
                <div className="message">hi 6</div>
            </div>
        </div>
    )

}

export default Dialogs;
