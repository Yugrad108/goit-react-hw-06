import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { list, item } from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const items = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const visibleContacts = items.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={list}>
      {visibleContacts.map((contact) => (
        <li key={contact.id} className={item}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

// import Contact from "../Contact/Contact";
// import styles from "./ContactList.module.css";
// const ContactList = ({ contacts, onDel }) => {
//   return (
//     <div className={styles.list}>
//       {contacts?.map(({ id, name, number }) => (
//         <Contact key={id} name={name} number={number} onDel={() => onDel(id)} />
//       ))}
//     </div>
//   );
// };

// export default ContactList;
