import { getAllContacts } from "../../api/contactApi";
import { useQuery } from "react-query";
import * as Styles from "./ContactList.styled";
import {
  brightColor,
  scaleDown,
  scaleUp,
} from "../../framerMotion/whileVariants";
import Link from "next/link";
import {
  listItemVariants,
  listVariants,
} from "../../framerMotion/listVariants";

const ContactList = () => {
  const { data, isLoading } = useQuery("contacts", getAllContacts);

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <Styles.List variants={listVariants} initial="initial" animate="animate">
      {data.map((contact) => (
        <Styles.ListItem
          variants={listItemVariants}
          key={contact._id}
          whileHover={{ ...scaleUp, ...brightColor }}
          whileFocus={{ ...scaleUp, ...brightColor }}
          whileTap={{ ...scaleDown, ...brightColor }}
        >
          <Link href={`/contacts/${contact._id}`}>
            <Styles.Anchor>
              <Styles.Name>{contact.name}</Styles.Name>
              <Styles.Email>{contact.email}</Styles.Email>
              <Styles.Age>{contact.age}</Styles.Age>
            </Styles.Anchor>
          </Link>
        </Styles.ListItem>
      ))}
    </Styles.List>
  );
};

export default ContactList;
