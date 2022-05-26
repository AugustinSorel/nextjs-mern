import { GetStaticPaths } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { dehydrate, QueryClient, useQuery, useMutation } from "react-query";
import {
  deleteContact,
  getAllContacts,
  getContact,
  updateContact,
} from "../../../api/contactApi";
import Button from "../../../components/Button";
import ContactForm from "../../../components/ContactForm";
import * as Styles from "../../../styles/ContactPage.styled";
import theme from "../../../styles/theme";

const ContactPage = () => {
  const router = useRouter();
  const contactId = typeof router.query.id === "string" ? router.query.id : "";

  const { data: contact, isLoading } = useQuery(["contact", contactId], () =>
    getContact(contactId)
  );

  const { mutate: deleteContactMutate } = useMutation(
    () => deleteContact(contactId),
    {
      onSuccess: () => router.push("/"),
      onError: (err) => console.log(err),
    }
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

      <Styles.Main>
        <ContactForm mutationFunction={updateContact} stateValues={contact} />
        <Button
          text="delete"
          onClick={deleteContactMutate}
          color={theme.colors.error}
        />
      </Styles.Main>
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
