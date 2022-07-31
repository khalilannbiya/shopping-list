import { useState } from "react";
import classNames from "classnames";
import shoppingIcon from "./assets/shopping-icon.svg";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import SearchInput from "./components/SearchInput";
import Info from "./components/Info";
import Todos from "./components/Todos";
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

   const handleSubstractionCount = (index) => {
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

            {todos.length > 0 ? <Todos todos={todos} onSubstraction={(index) => handleSubstractionCount(index)} onAddition={(index) => handleAdditionCount(index)} /> : <div>Kosong</div>}
         </Container>
      </>
   );
}

export default App;
