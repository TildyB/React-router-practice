import { Link, Outlet, useNavigate } from "react-router-dom"
import styles from "./Popup.module.css"


function Modal (){
  

    return (
        <div className={styles.hatter}>
            <div className={styles.doboz}>
                <h1>Ez a modal box</h1>
                <Link to="/popup/popup2">
                    Popup2 nyitás
                </Link>
            </div>
            <Outlet></Outlet>
        </div>
    )
}

export default Modal