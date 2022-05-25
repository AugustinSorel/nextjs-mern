import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { dehydrate, QueryClient } from "react-query";
import styled from "styled-components";
import { getAllContacts } from "../api/contactApi";
import ContactList from "../components/ContactList";

const Title = styled.h3`
  font-size: var(--font-size-large);
  font-weight: var(--font-weight-regular);
  margin: 0 auto;
  padding: var(--gap) calc(var(--gap) * 3);
  border-bottom: var(--border-height) solid var(--color);

  &::first-letter {
    text-transform: capitalize;
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>list of contacts</title>
        <meta name="description" content="see a list of contacts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title>list of contacts</Title>
      <main>
        <ContactList />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("contacts", getAllContacts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 1,
  };
};

export default Home;
