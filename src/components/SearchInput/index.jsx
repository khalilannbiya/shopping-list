import PropType from "prop-types";

const SearchInput = ({ onSubmit, value, onChange }) => {
   return (
      <form action="" className="form" onSubmit={onSubmit}>
         <input onChange={onChange} value={value} type="text" className="input" placeholder="List" />
         <button className="add-button" type="submit">
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
