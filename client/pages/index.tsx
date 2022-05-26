import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { dehydrate, QueryClient } from "react-query";
import styled from "styled-components";
import { getAllContacts } from "../api/contactApi";
import ContactList from "../components/ContactList";

const Title = styled.h3`
  font-size: var(--font-size-large);
  font-weight: var(--font-weight-regular);
  padding: var(--gap) calc(var(--gap) * 3);
  /* border-bottom: var(--border-height) solid var(--color); */
  text-align: center;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(5px);

  &::first-letter {
    text-transform: capitalize;
  }

  &::after {
    --underline-width: 30vw;
    content: "";
    position: absolute;
    height: var(--border-height);
    width: var(--underline-width);
    left: calc(50% - var(--underline-width) / 2);
    bottom: 0;
    background-color: var(--color);
  }
`;

const Main = styled.main`
  overflow: auto;
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>list of contacts</title>
        <meta name="description" content="see a list of contacts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>list of contacts</Title>
        <ContactList />
      </Main>
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
