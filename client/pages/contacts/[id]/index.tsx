import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { getAllContacts, getContact } from "../../../api/contactApi";
import ContactForm from "../../../components/ContactForm";

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
        <title>{`contact | ${contact.name}`}</title>
        <meta name="description" content="see a list of contacts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <ContactForm mutationFunction={()=>{}} /> */}
      <h3>{contact.name}</h3>
      <h3>{contact.email}</h3>
      <h3>{contact.age}</h3>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const contacts = await getAllContacts();
  const paths = contacts.map((contact) => ({
    params: { id: contact._id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const id = params.id;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["contact", id], () => getContact(id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 1,
  };
};

export default ContactPage;
