import { getAllContacts } from "../../api/contactApi";
import { useQuery } from "react-query";
import * as Styles from "./ContactList.styled";
import {
  brightColor,
  scaleDown,
  scaleUp,
} from "../../framerMotion/whileVariants";

const ContactList = () => {
  const { data, isLoading } = useQuery("contacts", getAllContacts);

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }
  return (
    <Styles.List>
      {data.map((contact) => (
        <Styles.ListItem
          key={contact._id}
          whileHover={{ ...scaleUp, ...brightColor }}
          whileFocus={{ ...scaleUp, ...brightColor }}
          whileTap={{ ...scaleDown, ...brightColor }}
        >
          <Styles.Name>{contact.name}</Styles.Name>
          <Styles.Email>{contact.email}</Styles.Email>
          <Styles.Age>{contact.age}</Styles.Age>
        </Styles.ListItem>
      ))}
    </Styles.List>
  );
};

export default ContactList;
