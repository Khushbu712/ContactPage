import styles from "./Navigator.module.css";

const Navigator = () => {
    return(
 <>
 <nav className= {`${styles.navigation} container`}>
 <div className="logo">
 <img src="/image/brand_logo.png" alt="brand"/>
 </div>

 <ul>
 <li>About</li>
 <li>Contact</li>
 <li>Help</li>
 </ul>

 </nav>
 </>

    )
}
 export default Navigator