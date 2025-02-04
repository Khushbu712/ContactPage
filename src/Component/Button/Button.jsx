import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({isOutline = false, icon = null, text = "Default Text" }) => {
  return (
    <div className={isOutline ? styles.sec : styles.prim}>
    {icon}
    {text}
    </div>
  )
};

Button.propTypes = {
    icon: PropTypes.node,
    text: PropTypes.string,
    isOutline:PropTypes.bool,
  };

export default Button
