import PropType from "prop-types";
import styles from "./Todos.module.css";
import classNames from "classnames";
import plusIcon from "../../assets/plus-icon.svg";
import minusIcon from "../../assets/minus-icon.svg";
const Todos = ({ todos, onSubstraction, onAddition }) => {
   return (
      <div className={styles.todos}>
         {todos.map((todo, index, arr) => {
            return (
               <div key={index} className={classNames(styles.todo, { [styles.todoDivider]: !(arr.length === index + 1) })}>
                  {todo.title}
                  <div className={styles.todoIconWrapper}>
                     <div className={styles.todoCount}>{todo.count}</div>
                     <button onClick={() => onSubstraction(index)} className={styles.todoActionButton}>
                        <img src={minusIcon} alt="minus icon" />
                     </button>
                     <button onClick={() => onAddition(index)} className={styles.todoActionButton}>
                        <img src={plusIcon} alt="plus icon" />
                     </button>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

Todos.propType = {
   todos: PropType.arrayOf(PropType.shape({ title: PropType.string, count: PropType.number })),
   onSubstraction: PropType.func,
   onAddition: PropType.func,
};

export default Todos;
