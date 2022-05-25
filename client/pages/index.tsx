import type { NextPage } from "next";
import Head from "next/head";
import { dehydrate, QueryClient } from "react-query";
import { getAllContacts } from "../api/contactApi";
import ContactList from "../components/ContactList";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>list of contacts</title>
        <meta name="description" content="see a list of contacts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ContactList />
      </main>
    </>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("contacts", getAllContacts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
