import PropType from "prop-types";
import styles from "./Container.module.css";
const Container = (props) => {
   return <section className={styles.container}>{props.children}</section>;
};

Container.propType = {
   children: PropType.node,
};

export default Container;
