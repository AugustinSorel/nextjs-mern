import type { NextPage } from "next";
import Head from "next/head";
import { QueryClient, dehydrate, useQuery } from "react-query";
import { getAllContacts } from "../api/contactApi";

const Home: NextPage = () => {
  const { data } = useQuery("posts", getAllContacts);

  return (
    <div>
      <Head>
        <title>list of contacts</title>
        <meta name="description" content="see a list of contacts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {data &&
        data.map((contact) => (
          <div>
            <h1>{contact.name}</h1>
            <p>{contact.email}</p>
          </div>
        ))}
    </div>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("posts", getAllContacts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
