import { GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { getAllContacts, getContact } from "../../../api/contactApi";
import Contact from "../../../types/Contact";

const ContactPage = () => {
  const router = useRouter();
  const contactId = typeof router.query.id === "string" ? router.query.id : "";

  const { data: contact, isLoading } = useQuery(["contact", contactId], () =>
    getContact(contactId)
  );

  if (isLoading || !contact) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{contact.name}</title>
        <meta name="description" content="see a list of contacts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h3>{contact.name}</h3>
      <h3>{contact.email}</h3>
      <h3>{contact.age}</h3>
    </>
  );
};

export default ContactPage;
