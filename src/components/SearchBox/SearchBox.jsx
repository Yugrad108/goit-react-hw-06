import { useId } from "react";
import { wrapper, input } from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const filterId = useId();
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  return (
    <div className={wrapper}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        type="text"
        id={filterId}
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value.trim()))}
        className={input}
      />
    </div>
  );
};

export default SearchBox;

// import styles from "./SearchBox.module.css";
// import stylesForm from "../ContactForm/ContactForm.module.css";

// export default function SearchBox({ value, onChange }) {
//   return (
//     <div className={styles.searchbox}>
//       <label htmlFor="searchbox">Find contacts by name</label>
//       <input
//         className={stylesForm.input}
//         type="text"
//         id="searchbox"
//         value={value}
//         onChange={(event) => onChange(event.target.value)}
//       />
//     </div>
//   );
// }
