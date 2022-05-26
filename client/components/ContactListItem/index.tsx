import { useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { listItemVariants } from "../../framerMotion/listVariants";
import {
  brightColor,
  scaleDown,
  scaleUp,
} from "../../framerMotion/whileVariants";
import Contact from "../../types/Contact";
import * as Styles from "./ContactListItem.styled";

type Props = {
  contact: Contact;
};

const ContactListItem = ({ contact }: Props) => {
  return (
    <Styles.Container
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
    </Styles.Container>
  );
};

export default ContactListItem;
