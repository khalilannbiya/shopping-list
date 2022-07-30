import styles from "./SearchInput.module.css";
import PropType from "prop-types";

const SearchInput = ({ onSubmit, value, onChange }) => {
   return (
      <form action="" className={styles.form} onSubmit={onSubmit}>
         <input onChange={onChange} value={value} type="text" className={styles.input} placeholder="List" />
         <button className={styles.addButton} type="submit">
            Add
         </button>
      </form>
   );
};

SearchInput.propType = {
   onSubmit: PropType.func,
   value: PropType.string,
   onChange: PropType.func,
};

export default SearchInput;
