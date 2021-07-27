import Backdrop from "../../UI/Backdrop/Backdrop";
import classes from './Drower.module.css'

const Drower = ({ open, close }) => {
    const clas = [
        classes.content,
        open ? classes.open : classes.close
    ];
    return (
        <div className={classes.Drower}>
            <Backdrop show={open} clik={close} />
            <div className={clas.join(' ')}>

            </div>
        </div>
    );
}

export default Drower;