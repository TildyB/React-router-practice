import { Outlet, useNavigate } from "react-router-dom"
import styles from "./Popup2.module.css"


function Popup2 (){
    return (
            <div className={styles.doboz}>
                <h1>Ez a modal box2</h1>
            </div>
    )
}

export default Popup2