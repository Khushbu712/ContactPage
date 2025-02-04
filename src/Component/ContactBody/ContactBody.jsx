import Button from "../Button/Button"
import styles from "./ContactBody.module.css"
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";


const ContactBody = () => {
  return (
    <section className={styles.body}>
      <div className={styles.contactForm}>
      <div className={styles.top_btn}>
      <Button 
      text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}
      />
      <Button 
      text="VIA CALL" icon={< IoMdCall fontSize="24px"/>}
      />
      </div>

      <Button 
      isOutline={true}
      text="VIA EMAIL FORM" icon={< MdMessage fontSize="24px"/>}
      />

   <form>
   <div className={styles.formContainer}>
   <label htmlFor="name">Name</label>
   <input type="text" name="name"/>
   </div>
   <div className={styles.formContainer}>
   <label htmlFor="email">Email</label>
   <input type="text" name="name"/>
   </div>
   <div className={styles.formContainer}>
   <label htmlFor="text">Text</label>
   <textarea name="text" rows="6"/>
   </div>
   <div style={{
    display:"flex",
    justifyContent:"end",
   }}>
   <Button 
   isOutline={false}
   text="SUBMIT" />
   </div>
 
   </form> 

      </div>
      <div className={styles.contactImage}>
      <img src="image/freepik--Character--inject-44.png" alt="contact-image"/>
      
      </div>
    </section>
  )
}

export default ContactBody
