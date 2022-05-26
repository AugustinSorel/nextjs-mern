import { useQuery } from "react-query";
import { getAllContacts } from "../../api/contactApi";
import { listVariants } from "../../framerMotion/listVariants";
import ContactListItem from "../ContactListItem";
import * as Styles from "./ContactList.styled";

const ContactList = () => {
  const { data, isLoading } = useQuery("contacts", getAllContacts);

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <Styles.List variants={listVariants} initial="initial" animate="animate">
      {data.map((contact) => (
        <ContactListItem key={contact._id} contact={contact} />
      ))}
    </Styles.List>
  );
};

export default ContactList;
