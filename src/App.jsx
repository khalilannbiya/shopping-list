import { useState } from "react";
import classNames from "classnames";
import "./App.css";
import plusIcon from "./assets/plus-icon.svg";
import minusIcon from "./assets/minus-icon.svg";
import shoppingIcon from "./assets/shopping-icon.svg";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import SearchInput from "./components/SearchInput";
import Info from "./components/Info";
function App() {
   const [value, setValue] = useState("");
   const [todos, setTodos] = useState([
      { title: "Susu Ultra", count: 1 },
      { title: "Tahu Sumedang", count: 1 },
      { title: "Semangka", count: 1 },
   ]);

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!value) {
         alert("No Blank list!");
         return;
      }
      const addedTodos = [
         ...todos,
         {
            title: value,
            count: 1,
         },
      ];
      setTodos(addedTodos);
      setValue("");
   };

   const handleAdditionCount = (index) => {
      const newTodos = [...todos];

      newTodos[index].count = newTodos[index].count + 1;

      setTodos(newTodos);
   };

   const handleSubSubstractionCount = (index) => {
      const newTodos = [...todos];
      if (newTodos[index].count > 0) {
         // Selama jumlah count masih diatas 0
         // Bisa lakuin pengurangan
         newTodos[index].count = newTodos[index].count - 1;
      } else {
         // Kalau udah 0 dan masih dikurangin juga
         // Hapus array value dengan index yang sesuai
         newTodos.splice(index, 1);
      }
      setTodos(newTodos);
   };

   const getTotalCounts = () => {
      const totalCounts = todos.reduce((total, num) => {
         return total + num.count;
      }, 0);
      return totalCounts;
   };
   return (
      <>
         <Navbar icon={shoppingIcon} />
         <Container>
            <SearchInput onSubmit={handleSubmit} value={value} onChange={(e) => setValue(e.target.value)} />
            <Info todosLength={todos.length} totalCounts={getTotalCounts()} onDelete={() => setTodos([])} />

            {todos.length > 0 ? (
               <div className="todos">
                  {todos.map((todo, index, arr) => {
                     return (
                        <div key={index} className={`todo ${!(arr.length === index + 1) && "todo-divider"}`}>
                           {todo.title}
                           <div className="todo-icon-wrapper">
                              <div className="todo-count">{todo.count}</div>
                              <button onClick={() => handleSubSubstractionCount(index)} className="todo-action-button">
                                 <img src={minusIcon} alt="minus icon" />
                              </button>
                              <button onClick={() => handleAdditionCount(index)} className="todo-action-button">
                                 <img src={plusIcon} alt="plus icon" />
                              </button>
                           </div>
                        </div>
                     );
                  })}
               </div>
            ) : (
               <div>Kosong</div>
            )}
         </Container>
      </>
   );
}

export default App;
